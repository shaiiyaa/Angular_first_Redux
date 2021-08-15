import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import WorkerModel from 'src/app/models/worker.model';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers-details',
  templateUrl: './workers-details.component.html',
  styleUrls: ['./workers-details.component.css']
})
export class WorkersDetailsComponent implements OnInit {

  public worker: WorkerModel;
  public image_api: string = "http://localhost:3030/api/employees/images/";

  constructor(private myWorkerService: WorkersService, private myActivatedRoute: ActivatedRoute, private router: Router) { }

  public worker_id = +this.myActivatedRoute.snapshot.params.id;
  
  async ngOnInit(){
    try {
      this.worker = await this.myWorkerService.getOneWorker(this.worker_id);
    } catch (error) {
      console.log(error);
    }
  }

  async delete() {
    try {
      await this. myWorkerService.deleteWorker(this.worker_id);
      //redirect to productlist
      this.router.navigateByUrl(`/workers`);
      
    } catch(err) {
      console.log(err);
    }
  }

}
