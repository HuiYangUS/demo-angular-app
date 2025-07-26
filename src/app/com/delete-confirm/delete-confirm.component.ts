import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataBankService } from '../../services/data-bank.service';

@Component({
  selector: 'app-delete-confirm',
  imports: [],
  templateUrl: './delete-confirm.component.html',
  styleUrl: './delete-confirm.component.scss'
})
export class DeleteConfirmComponent {

  @Output() deleteConfirmValue = new EventEmitter<boolean>();

  @Input() receiveData: any;

  onConfirm(value: boolean) {
    this.deleteConfirmValue.emit(value);
  }

}
