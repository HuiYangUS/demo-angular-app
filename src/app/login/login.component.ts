import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
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
export class LoginComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  username: string = "";
  password: string = "";

  constructor(private router: Router) {
    console.log("<0>: LoginComponent has been created.")
  }

  /**
   * Use: for input properties
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("<1>: ngOnChanges has been called.")
  }

  /**
   * Use (!): for API calls
   */
  ngOnInit(): void {
    console.log("<2>: ngOnInit() has been called.")
  }

  /**
   * Use: for change detection (every time a change is made)
   */
  ngDoCheck(): void {
    console.log("<3>: ngDoCheck() has been called.")
  }

  /**
   * Use: for creation of ng-Content
   */
  ngAfterContentInit(): void {
    console.log("<4>: ngAfterContentInit() has been called.")
  }

  /**
   * Use: for checking on ng-Content
   */
  ngAfterContentChecked(): void {
    console.log("<5>: ngAfterContentChecked() has been called.")
  }

  /**
   * Use (!): for viewChild (content has been rendered)
   */
  ngAfterViewInit(): void {
    console.log("<6>: ngAfterViewInit() has been called.")
  }

  /**
   * Use (!): for checking on viewChild
   */
  ngAfterViewChecked(): void {
    console.log("<7>: ngAfterViewChecked() has been called.")
  }

  /**
   * Use (!): for when this component is destroyed
   */
  ngOnDestroy(): void {
    console.log("<8>: ngOnDestroy() has been called.")
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
