import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: string = "";
  constructor() { }

  ngOnInit(): void {
    setInterval(()=> {
      const date = new Date();
      this.time = date.toLocaleTimeString();
    }, 1000)
  }

}
