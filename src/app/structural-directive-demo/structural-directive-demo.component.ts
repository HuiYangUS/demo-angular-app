import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-demo',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-demo.component.html',
  styleUrl: './structural-directive-demo.component.scss'
})
export class StructuralDirectiveDemoComponent {

  ifFuncText: string = "@if()";

  isChecked: boolean = false;
  isHidden: boolean = true;
  inputA: string = "";
  target: string = "";
  isEmpty: boolean = true;

  onClick() {
    // Update checkbox status
    this.isChecked = !this.isChecked;
  }

  clickShowTarget() {
    this.isHidden = false;
  }

  clickHideTarget() {
    this.isHidden = true;
  }

  findEmptyValue() {
    this.inputA = this.inputA.trim();
    this.target = this.target.trim();
    this.isEmpty = this.inputA === this.target && this.inputA.trim().length === 0;
  }

}
