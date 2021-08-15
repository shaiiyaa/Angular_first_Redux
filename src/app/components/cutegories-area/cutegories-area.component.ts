import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import CutegoriesModel from 'src/app/models/cutegories-model';
import { CutegoriesService } from 'src/app/services/cutegories.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-cutegories-area',
  templateUrl: './cutegories-area.component.html',
  styleUrls: ['./cutegories-area.component.css']
})
export class CutegoriesAreaComponent implements OnInit {

  public cutegories: CutegoriesModel[];
  public imageUrl = 'http://localhost:3030/api/categories/images/'
  
  constructor(private myCutegoriesService: CutegoriesService , private notify: NotifyService) { }

  async ngOnInit() {
    try {
     this.cutegories = await this.myCutegoriesService.getAllCutegories();
    } catch (err) {
      this.notify.error(err);
    }
  }


}
