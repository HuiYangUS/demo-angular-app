import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DemoApiService } from '../demo-api.service';
import { IUser } from '../i-user';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  addUserForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private apiService: DemoApiService) {
    this.addUserForm = formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log(this.addUserForm.value);
    this.apiService.postData(this.addUserForm.value).subscribe(reponse => { this.router.navigate(['crud']) });
  }

  onReset() {
    this.addUserForm.reset();
  }

  onCancel() {
    this.router.navigate(['crud']);
  }

}
