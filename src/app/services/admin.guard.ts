import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import store from '../redux/store';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  public constructor(private notify: NotifyService, private myRouter: Router) { }

    public canActivate(): boolean {

        // If user is logged-in AND use is admin: 
        if (store.getState().authState.user?.isAdmin)
            return true; // You can enter the route

        // If user isn't logged-in or not admin:
        this.notify.error("You must be admin!!!");
        this.myRouter.navigateByUrl("/home");
        return false; // You can't enter the route
    }

  
}
