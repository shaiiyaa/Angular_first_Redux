import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {

  product_name: string = "Adidas";

  constructor() { }

  ngOnInit(): void {
  }

  recommend(args: MouseEvent) {
    console.log(args);

    console.log(this.product_name);
  }

}
