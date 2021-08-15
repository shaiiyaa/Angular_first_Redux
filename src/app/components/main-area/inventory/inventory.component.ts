import { Component, OnInit } from '@angular/core';
import { ArrayService } from 'src/app/services/array.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  private product_prices: number[] = [49, 99, 159, 23, 45];
  total_prices: number = 0;

  constructor(private arrService: ArrayService) { }

  ngOnInit(): void {
    this.total_prices = this.arrService.getSum(this.product_prices);
  }

}
