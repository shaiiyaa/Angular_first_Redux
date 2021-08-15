import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.css']
})
export class SloganComponent implements OnInit {

  // Binding example
  slogan: string = "This is my slogan";

  constructor() { }

  ngOnInit(): void {
  }

}
