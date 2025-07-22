import { Component, OnInit } from '@angular/core';
import { DemoApiService } from '../demo-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../i-user';
import { last } from 'rxjs';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent implements OnInit {

  user: any;
  updateUserForm: FormGroup;
  uid!: number;

  constructor(private apiService: DemoApiService, private activeRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.updateUserForm = formBuilder.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      email: ['']
    });
  }

  ngOnInit(): void {
    this.uid = this.activeRoute.snapshot.params['id'];
    // Observable is a stream (one directional data output)
    this.apiService.getDataByID(this.uid).subscribe(result => {
      this.user = result;
      this.updateUserForm.patchValue(this.user);
    });

  }

  onSubmit() {
    this.apiService.updateDataByID(this.uid, this.updateUserForm.value).subscribe(result => {
      this.router.navigate(['crud']);
    });

  }

  onCancel() {
    this.router.navigate(['crud']);
  }

}
