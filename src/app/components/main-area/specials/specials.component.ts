import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrls: ['./specials.component.css']
})
export class SpecialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isWeekend(): boolean {
    const now = new Date();
    const dayOfWeek = now.getDay() + 1;
    return dayOfWeek >= 6;
  }

}
