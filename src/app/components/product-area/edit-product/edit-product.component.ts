import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ProductModel from 'src/app/models/product.model';
import { NotifyService } from 'src/app/services/notify.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  public product: ProductModel = new ProductModel();
  private product_id: number; 
  
  public imageVisited: boolean = false;
  public image_url: string;


  public formControl: FormGroup;
  public nameControl: FormControl;
  public priceControl: FormControl;
  public stockControl: FormControl;
  public imageControl: FormControl;


  constructor( private myActivatedRoute: ActivatedRoute,
    private myProductsService: ProductsService,
    private notify: NotifyService,
    private myRouter: Router) {
      
    this.nameControl = new FormControl(null, [Validators.required, Validators.pattern("^[A-Z].*$")]);
    this.priceControl = new FormControl(null, [Validators.required]);
    this.stockControl = new FormControl(null, [Validators.required]);
    this.imageControl = new FormControl();
    this.formControl = new FormGroup({
      nameControl: this.nameControl,
      priceControl: this.priceControl,
      stockControl: this.stockControl,
      imageControl: this.imageControl
    })
   }

  async ngOnInit() {
     //api
     try {
      //extract "id" from URL
      this.product.id = +this.myActivatedRoute.snapshot.params.id;
      const product = await this.myProductsService.getOneProduct(this.product.id);
      this.nameControl.setValue(product.name);
      this.priceControl.setValue(product.price);
      this.stockControl.setValue(product.stock);
      this.image_url = "http://localhost:3030/api/products/images/" + product.imageName;
    } catch (error) {
      this.notify.error(error);
    }
  }


  saveImage(args: Event) {
    this.product.images = (args.target as HTMLInputElement).files;
  }

  loseFocus() {
    this.imageVisited = true;
  }

  async update() {
    try {
      //transfer control objects value into product
      this.product.name = this.nameControl.value;
      this.product.price = this.priceControl.value;
      this.product.stock = this.stockControl.value;

      // make put request
      await this.myProductsService.updateProduct(this.product);
      this.notify.success("Product has been updated.");
      //redirect after adding new product
      // this.router.navigateByUrl("/products");
      this.myRouter.navigateByUrl(`/products/${this.myActivatedRoute.snapshot.params.id}`);
    } catch (error) {
      console.log(error)
    }
      }

}
