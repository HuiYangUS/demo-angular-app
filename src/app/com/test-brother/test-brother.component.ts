import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-brother',
  imports: [FormsModule],
  templateUrl: './test-brother.component.html',
  styleUrl: './test-brother.component.scss'
})
export class TestBrotherComponent {

  testBrotherInput: string = "";

  @Output() dataEventFromBrother = new EventEmitter<any>();

  @Input() dataFrom: string = "";

  sendData(mouseEvent: MouseEvent) {
    this.dataEventFromBrother.emit(this.testBrotherInput);
  }

  resetInput() {
    this.testBrotherInput = "";
  }

}
