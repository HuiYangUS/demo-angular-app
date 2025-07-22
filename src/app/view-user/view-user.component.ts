import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoApiService } from '../services/demo-api.service';

@Component({
  selector: 'app-view-user',
  imports: [ReactiveFormsModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss'
})
export class ViewUserComponent {

  viewUserForm: FormGroup;
  uid!: number;
  user: any;

  constructor(private apiService: DemoApiService, private activeRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) {
    this.viewUserForm = formBuilder.group({
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
      this.viewUserForm.patchValue(this.user);
      this.viewUserForm.controls['firstName'].disable();
      this.viewUserForm.controls['lastName'].disable();
      this.viewUserForm.controls['username'].disable();
      this.viewUserForm.controls['email'].disable();
    });
  }

  onEdit() {
    this.router.navigate(['update-user', this.uid]);
  }

  onCancel() {
    this.router.navigate(['crud']);
  }

}
