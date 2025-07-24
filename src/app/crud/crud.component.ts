import { Component, OnInit } from '@angular/core';
import { IUser } from '../domain/i-user';
import { Router } from '@angular/router';
import { DemoApiService } from '../services/demo-api.service';
import { DeleteConfirmComponent } from '../com/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-crud',
  imports: [DeleteConfirmComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CRUDComponent implements OnInit {

  apiData: IUser[] = [];

  useThisID: number = 0;

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
    this.useThisID = id;
  }

  receiveDeleteInfo(deleteInfo: boolean) {
    if (deleteInfo) {
      this.apiService.deleteDataByID(this.useThisID).subscribe(result => {
        this.getAllData();
      });
    }
  }

}
