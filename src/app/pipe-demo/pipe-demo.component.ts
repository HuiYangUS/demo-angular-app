import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-pipe-demo',
  imports: [CommonModule, FormsModule],
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.scss'
})
export class PipeDemoComponent {

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
