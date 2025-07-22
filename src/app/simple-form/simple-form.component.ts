import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../domain/user';

/**
 * Template Driven Form
 */
@Component({
  selector: 'app-simple-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.scss'
})
export class SimpleFormComponent implements OnInit {

  userObj: User = {};

  trimFirstName() {
    this.userObj.firstName = this.userObj.firstName?.trimEnd();
  }

  trimLastName() {
    this.userObj.lastName = this.userObj.lastName?.trimEnd();
  }

  /**
   * It can be used to set default values for the target form
   */
  ngOnInit(): void {
    this.userObj.email = "usa@test.com";
  }

  setTestValues(userForm: NgForm) {
    let testDataObj = {
      firstName: "Hui",
      lastName: "Yang",
      email: "tester@test.com",
      password: 123456,
      isChecked: true,
      comments: "This is a test!"
    }
    userForm.setValue(testDataObj);
  }

  patchTestValues(userForm: NgForm) {
    let testDataObj = {
      firstName: "Robert",
      lastName: "Fisher",
    }
    userForm.control.patchValue(testDataObj);
  }

  /**
   * Data from 'NgForm' pass to server (API)
   * @param userForm 
   */
  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
  }

  resetUserFormY(userForm: NgForm) {
    userForm.reset();
  }

  resetUserFormX() {
    this.userObj.firstName = "";
    this.userObj.lastName = "";
    this.userObj.email = "";
    this.userObj.password = "";
    this.userObj.isChecked = false;
    this.userObj.comments = "";
  }

}
