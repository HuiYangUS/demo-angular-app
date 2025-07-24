import { Component } from '@angular/core';
import { ReusableComponent } from '../reusable/reusable.component';

@Component({
  selector: 'app-my-home',
  imports: [ReusableComponent],
  templateUrl: './my-home.component.html',
  styleUrl: './my-home.component.scss'
})
export class MyHomeComponent {

}
