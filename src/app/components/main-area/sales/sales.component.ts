import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  @Input()
    precent: Number = 4;
  @Input()
    category: string = "Cakes";
    
  constructor() { }

  ngOnInit(): void {
  }

}
