import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import WorkerModel from '../models/worker.model';
import store from '../redux/store';
import { workerAddedAction, workerDeletedAction, workersDownloadedAction, workerUpdatedAction } from '../redux/workers-state';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  private employees_api = "http://localhost:3030/api/employees";

  constructor(private http: HttpClient) { }

  //get all Workers:
  public async getAllWorkers() {
    if (store.getState().workersState.workers.length === 0) {
      // const workers = await this.http.get<WorkerModel[]>(this.employees_api).toPromise();
      const workers = await this.http.get<WorkerModel[]>(this.employees_api).toPromise();
      store.dispatch(workersDownloadedAction(workers));
    }
    return store.getState().workersState.workers;
  }
  // Get one employee: 
  public async getOneWorker(id: number) {
    if (store.getState().workersState.workers.length === 0) {
        const workers = await this.http.get<WorkerModel[]>(this.employees_api).toPromise();
        store.dispatch(workersDownloadedAction(workers));
    }
    const worker = store.getState().workersState.workers.find(p => p.id === id);
    return worker;
  }
  // Add employee: 
  public async addWorker(worker: WorkerModel) {
    const myFormData: FormData = WorkerModel.convertToFormData(worker);
    const addedWorker = await this.http.post<WorkerModel>(this.employees_api, myFormData).toPromise();
    store.dispatch(workerAddedAction(addedWorker));
    return addedWorker;
  }
  // Update employee: 
  public async updateWorker(worker: WorkerModel) {
      const myFormData: FormData = WorkerModel.convertToFormData(worker);
      const updatedWorker = await this.http.put<WorkerModel>(this.employees_api + "/" + worker.id, myFormData).toPromise();
      store.dispatch(workerUpdatedAction(updatedWorker));
      return updatedWorker;
  }
  // Delete employee: 
  public async deleteWorker(id: number) {
      await this.http.delete(this.employees_api + "/" + id).toPromise();
      store.dispatch(workerDeletedAction(id));
  }

}

