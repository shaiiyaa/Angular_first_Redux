import { Component, OnInit } from '@angular/core';
import WorkerModel from 'src/app/models/worker.model';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {

  public workers: WorkerModel[];
  public image_api: string = "http://localhost:3030/api/employees/images/"

  constructor(private myWorkersService: WorkersService) { }

  async ngOnInit() {
    try {
      const workers = await this.myWorkersService.getAllWorkers();
      this.workers = workers.reverse();
      
    } catch (error) {
      console.log(error);
    }
  }

}
