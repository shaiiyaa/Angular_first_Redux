import { Component, OnInit } from '@angular/core';
import { RandomColorService } from 'src/app/services/random-color.service';

@Component({
  selector: 'app-exercise-random-color',
  templateUrl: './exercise-random-color.component.html',
  styleUrls: ['./exercise-random-color.component.css']
})
export class ExerciseRandomColorComponent implements OnInit {
  aaa: string = "aaa";
  bgColor: object = {};

  constructor(private randCol: RandomColorService) { }

  ngOnInit(): void {
    setInterval(()=> {
      this.bgColor = {
        backgroundColor: this.randCol.getRandColor(),
        color: this.randCol.getRandColor()
      };
    }, 1000)
    
  }

}
