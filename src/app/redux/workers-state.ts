import WorkerModel from "../models/worker.model";

// workers State: 
export class WorkersState {
    public workers: WorkerModel[] = [];
}

//workers State:
export enum WorkerActionType {
    workerDownloaded = "workerDownloaded",
    workerAdded = "workerAdded",
    workerUpdated = "workerUpdated",
    workerDeleted = "workerDeleted"
}

//worker Action:
export interface WorkerAction {
    type: WorkerActionType;
    payload: any;
    // More specific type list:
    // payload: EmployeeModel[] | EmployeeModel | number;
}

//worker Action creators:
export function workersDownloadedAction(workers: WorkerModel[]):WorkerAction {
    return { type: WorkerActionType.workerDownloaded, payload: workers }
}

export function workerAddedAction(workers: WorkerModel):WorkerAction {
    return { type: WorkerActionType.workerAdded, payload: workers }
}

export function workerUpdatedAction(workers: WorkerModel):WorkerAction {
    return { type: WorkerActionType.workerUpdated, payload: workers }
}

export function workerDeletedAction(id: Number):WorkerAction {
    return { type: WorkerActionType.workerDeleted, payload: id }
}

//workers Reducers:
export function workersReducer(currentState: WorkersState = new WorkersState(), action:WorkerAction): WorkersState {
    
    const newState = { ...currentState };

    switch(action.type) {
        case WorkerActionType.workerDownloaded: // Here payload is all workers (WorkerModel[])
            newState.workers = action.payload;
            break;
        case WorkerActionType.workerAdded: // Here payload is the added employee (EmployeeModel)
            newState.workers.push(action.payload);
            break;
        case WorkerActionType.workerUpdated: { // Here payload is the updated employee (EmployeeModel)
            const index = newState.workers.findIndex(p => p.id === action.payload.id);
            newState.workers[index] = action.payload;
            break;
        }
        case WorkerActionType.workerDeleted: { // Here payload is the deleted employee's id (number)
            const index = newState.workers.findIndex(p => p.id === action.payload);
            newState.workers.splice(index, 1);
            break;
        }
    }

    return newState;
}