import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import CutegoriesModel from '../models/cutegories-model';

import { cutegorieDownloadedAction } from '../redux/cutegories-state';
import store from '../redux/store';

@Injectable({
  providedIn: 'root'
})
export class CutegoriesService {
  
  private cutegories_api = 'http://localhost:3030/api/categories';
  
  constructor(private http: HttpClient) { }

  public async getAllCutegories() {
    if (store.getState().cutegoriesState.cutegories.length === 0) {
      const cutegories = await this.http.get<CutegoriesModel>(this.cutegories_api).toPromise();
      store.dispatch(cutegorieDownloadedAction(cutegories));
    }
    return store.getState().cutegoriesState.cutegories;
  }

}
