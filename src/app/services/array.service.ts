import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor() { }

  public getSum(numbers: number[]): number {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  }
}
