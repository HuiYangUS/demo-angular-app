import { Component } from '@angular/core';

@Component({
  selector: 'app-storage',
  imports: [],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.scss'
})
export class StorageComponent {

  targetValue: any = "";

  localValue: any = "";

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

}
