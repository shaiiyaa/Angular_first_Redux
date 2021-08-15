import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import WorkerModel from 'src/app/models/worker.model';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {
  public imgValue: any;

  public worker: WorkerModel = new WorkerModel();
  private worker_id: number;
  public imageVisited: boolean = false;
  public image_url: string;
  private worker_api: string = "http://localhost:3030/api/employees/";

  public formControl: FormGroup;
  public firstNameControl: FormControl;
  public lastNameControl: FormControl;
  public titleControl: FormControl;
  public countryControl: FormControl;
  public cityControl: FormControl;
  public birthDateControl: FormControl;
  public imageControl: FormControl;

  constructor( private myWorkerService: WorkersService, private myRoute: ActivatedRoute, private http: HttpClient, private router: Router ) {

    this.firstNameControl = new FormControl(null, [Validators.required, Validators.pattern("^[A-Z].*$")]);
    this.lastNameControl = new FormControl(null, [Validators.required, Validators.pattern("^[A-Z].*$")]);
    this.titleControl = new FormControl(null, [Validators.required]);
    this.countryControl = new FormControl(null, [Validators.required]);
    this.cityControl = new FormControl(null, [Validators.required]);
    this.birthDateControl = new FormControl(null, [Validators.required]);
    // this.imageControl = new FormControl();
    this.formControl = new FormGroup({
      firstNameControl: this.firstNameControl,
      lastNameControl: this.lastNameControl,
      titleControl: this.titleControl,
      countryControl: this.countryControl,
      cityControl: this.cityControl,
      birthDateControl: this.birthDateControl,
      // imageControl: this.imageControl
    })
   }

  async ngOnInit() {
    try {
      this.worker_id = this.myRoute.snapshot.params.id;

      const worker = await this.myWorkerService.getOneWorker(+this.worker_id);

      this.firstNameControl.setValue(worker.firstName);
      this.lastNameControl.setValue(worker.lastName);
      this.titleControl.setValue(worker.title);
      this.countryControl.setValue(worker.country);
      this.cityControl.setValue(worker.city);
      this.birthDateControl.setValue(worker.birthDate);
      this.image_url = "http://localhost:3030/api/employees/images/" + worker.imageName;
    } catch (error) {
      console.log(error);
    }
  }

  saveImage(args: Event) {
    this.worker.images = (args.target as HTMLInputElement).files;
  }
  loseFocus() {
    this.imageVisited = true;
  }

  async update() {
    //transfer value from HTML to WORKER object
    this.worker.id = this.worker_id;
    this.worker.firstName = this.firstNameControl.value;
    this.worker.lastName = this.lastNameControl.value;
    this.worker.title = this.titleControl.value;
    this.worker.country = this.countryControl.value;
    this.worker.city = this.cityControl.value;
    this.worker.birthDate = this.birthDateControl.value;

    //make PUT request
    await this.myWorkerService.updateWorker(this.worker);

    //redirect after edit
    this.router.navigateByUrl(`/workers/${this.worker_id}`);
  }

}
