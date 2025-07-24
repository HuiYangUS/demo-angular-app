import { Component, EventEmitter, Output } from '@angular/core';
import { DataBankService } from '../../services/data-bank.service';

@Component({
  selector: 'app-delete-confirm',
  imports: [],
  templateUrl: './delete-confirm.component.html',
  styleUrl: './delete-confirm.component.scss'
})
export class DeleteConfirmComponent {

  @Output() dataEmitter = new EventEmitter<boolean>();

  constructor(private dataBank: DataBankService) { }

  onDelete(value: boolean) {
    this.dataEmitter.emit(value);
  }

}
