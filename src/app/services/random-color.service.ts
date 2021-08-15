import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomColorService {

  constructor() { }

  public getRandColor(): string {
    
    const random = '#'+Math.floor(Math.random()*16777215).toString(16);

    return random;
  }
}
