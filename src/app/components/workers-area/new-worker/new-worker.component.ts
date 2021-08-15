import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import WorkerModel from 'src/app/models/worker.model';
import { WorkersService } from 'src/app/services/workers.service';


@Component({
  selector: 'app-new-worker',
  templateUrl: './new-worker.component.html',
  styleUrls: ['./new-worker.component.css']
})
export class NewWorkerComponent implements OnInit {

  public worker: WorkerModel = new WorkerModel();
  public imageVisited: boolean = false;

  constructor(private myWorkersService: WorkersService, private router: Router) { }
  
  ngOnInit(): void {
  }

  saveImage(args: Event) {
    this.worker.images = (args.target as HTMLInputElement).files;
  }

  loseFocus() {
    this.imageVisited = true;
  }

  async submit() {
    try {
      await this.myWorkersService.addWorker(this.worker);

      this.router.navigateByUrl(`/workers`);
    } catch (error) {
      console.log(error)
    }
  }

}
