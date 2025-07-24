import { Component } from '@angular/core';
import { ReactiveFormComponent } from '../../reactive-form/reactive-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeleteConfirmComponent } from '../../com/delete-confirm/delete-confirm.component';
import { DataBankService } from '../../services/data-bank.service';

@Component({
  selector: 'app-test',
  imports: [
    ReactiveFormComponent,
    CommonModule,
    FormsModule,
    DeleteConfirmComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  currentTab: string = "Dashboard";

  deleteMessage: string = "";

  constructor(private dataBank: DataBankService) {
  }

  receiveDeleteInfo(deleteInfo: boolean) {
    if (deleteInfo) {
      this.deleteMessage = "I had been deleted."
    } else {
      this.deleteMessage = "I have survived for another day."
    }
  }

  selectTab(tabName: string) {
    this.currentTab = tabName;
  }

  testFormMessageX2: string = "Testing Form in Tab";

}
