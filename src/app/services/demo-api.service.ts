import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../domain/i-user';

@Injectable({
  providedIn: 'root'
})
export class DemoApiService {

  base_url: string = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get<IUser[]>(this.base_url);
  }

  postData(iUser: IUser) {
    return this.httpClient.post(this.base_url, iUser);
  }

  getDataByID(id: number): Observable<IUser> {
    let targetEndpoint: string = `${this.base_url}/${id}`;
    console.log(targetEndpoint);
    return this.httpClient.get<IUser>(targetEndpoint);
  }

  updateDataByID(id: number, user: IUser) {
    let targetEndpoint: string = `${this.base_url}/${id}`;
    console.log(targetEndpoint);
    return this.httpClient.put(targetEndpoint, user);
  }

  deleteDataByID(id: number) {
    let targetEndpoint: string = `${this.base_url}/${id}`;
    console.log(targetEndpoint);
    return this.httpClient.delete(targetEndpoint);
  }

}
