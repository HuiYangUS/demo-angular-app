import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataBankService {

  DEMO_API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _httpClient: HttpClient) {

  }

  getUsers() {
    return this._httpClient.get(this.DEMO_API_URL);
  }

  userData = {
    id: 101,
    name: 'Jane Doe',
    username: 'demo',
    email: 'demo@test.com',
    accessRefCode: 1
  };

  isUserAdmin(): boolean {
    return this.userData.accessRefCode == 0;
  }

}
