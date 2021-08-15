import {Input, Component, OnInit } from '@angular/core';
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
    public product: ProductModel;
    public image_api: string = "http://localhost:3030/api/products/images/";

  constructor() { }

  ngOnInit(): void {
  }

}
