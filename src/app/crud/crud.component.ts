import { Component, Input, OnInit } from '@angular/core';
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

  @Input()
  deleteID!: number;

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

  /**
   * Setup id for delete confirmation
   * @param id 
   */
  onDelete(id: number) {
    this.deleteID = id;
    console.log("Delete ID = " + id);
  }

  receiveDeleteInfo(deleteInfo: boolean) {
    const deleteButton = document.activeElement as HTMLButtonElement;
    deleteButton.blur();
    console.log("Delete confirmed: " + deleteInfo);
    if (deleteInfo) {
      this.apiService.deleteDataByID(this.deleteID).subscribe(result => {
        this.getAllData();
      });
    }
  }

}
