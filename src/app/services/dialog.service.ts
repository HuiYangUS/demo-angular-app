import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  testConfirm: boolean = false;

  constructor() { }

  updateConfirmValue(value: boolean) {
    this.testConfirm = value;
  }

}
