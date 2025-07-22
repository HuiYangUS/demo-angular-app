import { Component, OnInit } from '@angular/core';
import { IUser } from '../domain/i-user';
import { Router } from '@angular/router';
import { DemoApiService } from '../services/demo-api.service';

@Component({
  selector: 'app-crud',
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CRUDComponent implements OnInit {

  apiData: IUser[] = [];

  constructor(private apiService: DemoApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.apiService.getData().subscribe(response => { this.apiData = response });
  }

  addUser() {
    this.router.navigate(['add-user']);
  }

  onView(id: number) {
    this.router.navigate(['view-user', id]);
  }

  onUpdate(id: number) {
    this.router.navigate(['update-user', id]);
  }

  onDelete(id: number) {
    this.apiService.deleteDataByID(id).subscribe(result => {
      this.getAllData();
    });
  }

}
