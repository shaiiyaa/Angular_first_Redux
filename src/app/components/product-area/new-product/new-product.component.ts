
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  public product: ProductModel = new ProductModel();
  public imageVisited: boolean = false;
  
  constructor(private myProductsService: ProductsService, private myRouter: Router, private notify: NotifyService) { }
  ngOnInit(): void {
  }

  saveImage(args: Event) {
    this.product.images = (args.target as HTMLInputElement).files;
  }

  loseFocus() {
    this.imageVisited = true;
  }

  async submit() {
    try {
      await this.myProductsService.addProduct(this.product);
      this.notify.success("Product has been added.");
      this.myRouter.navigateByUrl("/products");
    } catch (error) {
      this.notify.error(error);
    }
      }
}

