import { Component } from '@angular/core';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-test-confirm',
  imports: [],
  templateUrl: './test-confirm.component.html',
  styleUrl: './test-confirm.component.scss'
})
export class TestConfirmComponent {


  constructor(private dialogService: DialogService) { }

  sendConfirmValue(value: boolean) {
    this.dialogService.updateConfirmValue(value);
  }

}
