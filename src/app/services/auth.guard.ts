import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import store from '../redux/store';
import { NotifyService } from './notify.service';

// Guard from entering or leaving a specific route in the front (not in the back)

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  public constructor(private notify: NotifyService, private myRouter: Router) {  }

  public canActivate(): boolean {
    
    //if user is logged-in:
    if(store.getState().authState.user) 
      return true;
    
    //if user isn`t logged-in
    this.notify.error("You must be logged in");
    this.myRouter.navigateByUrl("/login");
    return false; // You can't enter the route
  }
  
  
}
