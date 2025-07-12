import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.scss'
})
export class BuiltInPipesComponent {

  // Use: 'component.html'
  ngPipeDef: string = "pipes are functions that are used to format data in angular templates";

}
