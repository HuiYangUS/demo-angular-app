import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {

  reactiveUserForm: FormGroup;

  constructor() {
    this.reactiveUserForm = new FormGroup(
      {
        firstName: new FormControl(""),
        lastName: new FormControl(""),
        email: new FormControl(""),
        password: new FormControl(""),
        location: new FormGroup(
          {
            streetAddress: new FormControl(""),
            city: new FormControl(""),
            state: new FormControl(""),
            zipCode: new FormControl()
          }
        ),
        isChecked: new FormControl()
      }
    );
  }

  onSubmit() {
    console.log(this.reactiveUserForm.value);
  }

}
