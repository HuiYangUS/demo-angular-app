import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { ReactiveFormComponent } from '../../reactive-form/reactive-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeleteConfirmComponent } from '../../com/delete-confirm/delete-confirm.component';
import { TestConfirmComponent } from '../../com/test-confirm/test-confirm.component';
import { DialogService } from '../../services/dialog.service';
import { TestParentComponent } from '../../com/test-parent/test-parent.component';
import { StorageComponent } from '../../com/storage/storage.component';

@Component({
  selector: 'app-test',
  imports: [
    ReactiveFormComponent,
    CommonModule,
    FormsModule,
    DeleteConfirmComponent,
    TestConfirmComponent,
    TestParentComponent,
    StorageComponent
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {

  currentTab: string = "Dashboard";

  deleteMessage: string = "";

  parentMessage: string = ""

  @ViewChild('testButton') testButton!: ElementRef<HTMLButtonElement>;

  @ViewChild('testConfirmModal') testConfirmCom!: TestConfirmComponent;

  testConfirmValue: boolean;
  testMessage: string = "";

  dialogDemoSelectLabel: string = "Select Dialog Demo";

  constructor(private dialogService: DialogService) {
    this.testConfirmValue = dialogService.testConfirm;
  }

  /**
   * Press 'Enter' to open a dialog
   * @param keyboard 
   */
  onKeyPress(keyboard: KeyboardEvent) {
    if (keyboard.key == "Enter") {
      this.testButton.nativeElement.click();
    }
  }

  selectDialogDemo(selectLabel: string) {
    this.dialogDemoSelectLabel = selectLabel;
  }

  @HostListener('click', ['$event.target'])
  onClickDialogDemo1(targetElement: HTMLElement) {
    this.testMessage = "You have clicked."
    console.log(targetElement)
  }

  updateParentMessage() {
    if (this.parentMessage.trim().length == 0) {
      this.parentMessage = "I have no parents."
    }
    this.testConfirmCom.childMessage = this.parentMessage;
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
      this.deleteMessage = "I have survived another day."
    }
  }

  selectTab(tabName: string) {
    this.currentTab = tabName;
  }

  testFormMessageX2: string = "Testing Form in Tab";

}
