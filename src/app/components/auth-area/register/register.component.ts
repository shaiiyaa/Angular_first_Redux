import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = new UserModel();

  constructor(private myAuthService: AuthService, private notify: NotifyService, private myRoute: Router) { }

  public async register() {
    try {
      await this.myAuthService.register(this.user);
      this.notify.success("You are registered");
      this.myRoute.navigateByUrl("/main")
    } catch (error) {
      this.notify.error(error);
    }
  }

  ngOnInit(): void {
  }

}
