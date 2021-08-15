import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.css']
})
export class DessertsComponent implements OnInit {

  desserts: string[] = ["Pavlova", "Chocolate Cake", "Cheese Cake", "Tiramisu"];

  constructor() { }

  ngOnInit(): void {
  }

}
