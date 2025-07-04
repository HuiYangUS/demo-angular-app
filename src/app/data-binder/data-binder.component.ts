import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binder',
  imports: [FormsModule],
  templateUrl: './data-binder.component.html',
  styleUrl: './data-binder.component.scss'
})
export class DataBinderComponent {
  /**
   * Create variables
   * and then insert them as visible content in 'html'
   * using {{}}
   */
  name: string = "Demo Tester";
  title: string = "One way data binding - Type 1";
  /**
   * Create variables
   * and then insert them as invisible properties in 'html'
   * using [] 
   * Property binding sends data from component to client
   */
  id: number = 33;
  my_value: string = "A Test";
  /**
   * Default image folder is 'public' instead of 'assets'
   */
  image_path: string = "demo-2025-07-03.jpg";
  /**
   * Data pass from client to function
   */
  onPlay(text: string) {
    let is_empty: boolean = text.trim().length == 0;
    if (is_empty) {
      text = "Nothing was written here!"
    }
    alert(text);
  }

  onChange(targetEvent: any) {
    let targetText = targetEvent.target.value;
    alert("You have changed your selection: " + targetText);
  }

  onSubmit(selectedValue: string) {
    alert(selectedValue);
  }

  randomText = "";

}
