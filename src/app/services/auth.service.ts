import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialsModel } from '../models/credentials.model';
import { UserModel } from '../models/user.model';
import { userLoggedInAction, userLoggedOutAction, userRegisteredAction } from '../redux/auto-state';
import store from '../redux/store';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public async register(user: UserModel) {
    const addedUser = await this.http.post<UserModel>("http://localhost:3030/api/auth/register", user).toPromise();
    store.dispatch(userRegisteredAction(addedUser));
    return addedUser;
  }

  public async login(credentials: CredentialsModel) {
    const loggedInUser = await this.http.post<UserModel>("http://localhost:3030/api/auth/login", credentials).toPromise();
    store.dispatch(userLoggedInAction(loggedInUser));
    return loggedInUser;
  }

  public async logout() {
    store.dispatch(userLoggedOutAction());
  }
}
