import { Component } from '@angular/core';
import { userInfo } from 'node:os';
import { DataBankService } from '../data-bank.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  userProfile: any;
  isUserAdmin: boolean;

  constructor(private _dataBank: DataBankService) {
    this.userProfile = _dataBank.userData;
    this.isUserAdmin = _dataBank.isUserAdmin();
  }

}
