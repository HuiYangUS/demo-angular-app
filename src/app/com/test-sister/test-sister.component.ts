import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-sister',
  imports: [FormsModule],
  templateUrl: './test-sister.component.html',
  styleUrl: './test-sister.component.scss'
})
export class TestSisterComponent {

  testSisterInput: string = "";

  @Input() dataFrom: string = "";

  @Output() dataEventFromSister = new EventEmitter<any>();

  sendData(mouseEvent: MouseEvent) {
    this.dataEventFromSister.emit(this.testSisterInput);
  }

  resetInput() {
    this.testSisterInput = "";
  }

}
