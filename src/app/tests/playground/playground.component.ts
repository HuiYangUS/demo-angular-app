import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playground',
  imports: [FormsModule, CommonModule],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {

  testValue = "Choose";

  optionStyle1 = {
    "background-color": "chartreuse",
    "border": "none",
    "padding": "10px",
    "font-family": "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    "font-style": "oblique"
  };

  targetValue: any = "";

  getSessionData() {
    this.targetValue = sessionStorage.getItem('pie');
  }

}
