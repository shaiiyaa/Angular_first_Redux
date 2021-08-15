import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import ProductModel from 'src/app/models/product.model';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  public products: ProductModel[];
  
  constructor(private myProductsService: ProductsService, private notify: NotifyService) { }

  async ngOnInit() {
    try {
      const products = await this.myProductsService.getAllProducts();
      this.products = products.reverse();
    } catch (err) {
      this.notify.error(err);
    }
  }

}
