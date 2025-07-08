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

  useColor(color: string) {
    this.targetTextColor = color;
  }

  targetStyleColor: string = "black";

  updateColor(color: string) {
    this.targetStyleColor = color;
  }

  // 2
  isTextGreen: boolean = false;

  isTextOrange: boolean = false;

  isChecked: boolean = false;

  // 3
  userClass: string = "";

  userStyle: string = "";

  targetStyleObj: any = {
    "color": "white",
    "padding": "5px",
    "background-color": "red",
    "margin": "10px",
    "border": "5px solid blue"
  }

}
