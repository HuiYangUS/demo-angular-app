import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    // RouterLink,
    CommonModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private router: Router) {

  }

  loginMyApp() {
    /**
     * Authentication API (Incoming)
     */
    // this.router.navigateByUrl("home");
    this.router.navigate(["home"]);
  }

  resetMyLogin() {
    this.username = "";
    this.password = "";
  }

}
