import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  imports: [],
  templateUrl: './reusable.component.html',
  styleUrl: './reusable.component.scss'
})
export class ReusableComponent {

  /**
   * Child properties to be passed onto parent properties 
   * for data binding
   */
  @Input()
  displayMessage: string = "";

}
