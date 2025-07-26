import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-storage',
  imports: [],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.scss'
})
export class StorageComponent {

  targetValue: any = "";

  localValue: any = "";

  saveCookie: any;

  constructor(private cookie: CookieService) {

  }

  setSessionData() {
    sessionStorage.setItem('pie', 'peacan pie');
  }

  getSessionData() {
    this.targetValue = sessionStorage.getItem('pie');
  }

  removeSessionData() {
    sessionStorage.removeItem('pie');
  }

  clearSession() {
    sessionStorage.clear();
  }

  setLocalData() {
    localStorage.setItem('pie', 'apple pie');
  }

  getLocalData() {
    this.localValue = localStorage.getItem('pie');
  }

  removeLocalData() {
    localStorage.removeItem('pie');
  }

  clearLocalData() {
    localStorage.clear();
  }

  setCookie() {
    let mins = 30;
    let currentDate = new Date();
    let expireDate = new Date(currentDate.getTime() + mins * 60000);
    this.saveCookie = this.cookie.set('token', '123456', expireDate);
  }

  /**
   * Check browser - Application tab / Domain specific
   */
  getCookie() {
    this.saveCookie = this.cookie.get('token');
  }

  removeCookie() {
    this.cookie.delete('token');
  }

}
