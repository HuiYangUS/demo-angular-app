import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive-demo',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive-demo.component.html',
  styleUrl: './attribute-directive-demo.component.scss'
})
export class AttributeDirectiveDemoComponent {

  // 1
  targetTextColor: string = "text-dark";

  changeColor(color: string) {
    this.targetTextColor = color;
  }

  // 2
  isTextGreen: boolean = false;

  isChecked: boolean = false;

  // 3
  userClass: string = "";

}
