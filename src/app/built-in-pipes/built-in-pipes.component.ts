import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule, FormsModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {

  // Use: 'component.html'
  ngPipeDef: string = "pipes are functions that are used to format data in angular templates";

  personData = {
    id: 101,
    name: "John Smith",
    score: 97,
    class: "Biology"
  };

  currentDate: Date = new Date();

  pie: number = 3.14159;

  items = of(["Apple", "Peach", "Mango"]);

  demoOptions = ["String", "Number", "Raw Data"];

  targetSelection = "";

}
