import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel;
    public image_api: string = "http://localhost:3030/api/products/images/";

  constructor(private myProductsService: ProductsService, private myActivatedRoute: ActivatedRoute, private notify: NotifyService, private router: Router) { }

  async ngOnInit() {
    //api
    try {
      const product_id = +this.myActivatedRoute.snapshot.params.id;
      this.product = await this.myProductsService.getOneProduct(product_id);
    } catch (error) {
      this.notify.error(error);
    }
  }

  async delete() {
    try {
      const answer = confirm("Are you sure?");
            if (!answer) return;
            await this.myProductsService.deleteProduct(this.product.id);
            this.notify.success("Product has been deleted.")
            this.router.navigateByUrl("/products");
    } catch(err) {
      this.notify.error(err);
    }
  }
}
