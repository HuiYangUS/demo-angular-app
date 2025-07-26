import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-child',
  imports: [FormsModule],
  templateUrl: './test-child.component.html',
  styleUrl: './test-child.component.scss'
})
export class TestChildComponent {

  @Input() childInputProperty: string = "";

  @Output() childOutputProperty = new EventEmitter<any>();

  testChildInput: string = "";

  resetInput() {
    this.testChildInput = "";
    this.childOutputProperty.emit(this.testChildInput);
  }

  sendData(keyboard: KeyboardEvent) {
    console.log(keyboard.key)
    if (keyboard.key == "Enter" || keyboard.key == "Tab") {
      this.childOutputProperty.emit(this.testChildInput);
    }
  }

}
