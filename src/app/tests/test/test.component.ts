import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormComponent } from '../../reactive-form/reactive-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeleteConfirmComponent } from '../../com/delete-confirm/delete-confirm.component';
import { TestConfirmComponent } from '../../com/test-confirm/test-confirm.component';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-test',
  imports: [
    ReactiveFormComponent,
    CommonModule,
    FormsModule,
    DeleteConfirmComponent,
    TestConfirmComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  currentTab: string = "Dashboard";

  deleteMessage: string = "";

  parentMessage: string = ""

  @ViewChild('testInput')
  testInput!: ElementRef<HTMLInputElement>;

  @ViewChild('testButton')
  testButton!: ElementRef<HTMLButtonElement>;

  testConfirmValue: boolean;
  testMessage: string = "";

  constructor(private dialogService: DialogService) {
    this.testConfirmValue = dialogService.testConfirm;
  }

  /**
   * Press 'Enter' to open a dialog
   * @param keyboard 
   */
  onKeyPress(keyboard: KeyboardEvent) {
    if (keyboard.key == "Enter") {
      console.log(this.testInput.nativeElement.value)
      console.log("You have entered the correct key.");
      this.testButton.nativeElement.click();
    }
  }

  updateParentMessage() {
    if (this.parentMessage.trim().length == 0) {
      this.parentMessage = "I have no parents."
    }
  }

  useDialogService() {
    this.testConfirmValue = this.dialogService.testConfirm;
    this.testMessage = this.changeTestMessage();
  }

  changeTestMessage() {
    if (this.testConfirmValue) {
      return "I had been confirmed."
    } else {
      return "I have been rejected."
    }
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
