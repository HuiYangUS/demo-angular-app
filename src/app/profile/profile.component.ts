import { Component, OnInit } from '@angular/core';
import { DataBankService } from '../services/data-bank.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {

  userProfile: any;
  isUserAdmin: boolean;
  usersResponseDemoAPI: any;

  constructor(private _dataBank: DataBankService) {
    this.userProfile = _dataBank.userData;
    this.isUserAdmin = _dataBank.isUserAdmin();
  }

  ngOnInit(): void {
    this.getCurrentUsers();
  }

  getCurrentUsers() {
    this._dataBank.getUsers().subscribe(response => { this.usersResponseDemoAPI = response });
  }

}
