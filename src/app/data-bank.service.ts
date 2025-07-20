import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataBankService {

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

  constructor() { }

}
