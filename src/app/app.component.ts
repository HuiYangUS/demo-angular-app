import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBinderComponent } from './data-binder/data-binder.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { StructuralDirectiveDemoComponent } from './structural-directive-demo/structural-directive-demo.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // UserComponent,
    // DataBinderComponent,
    // DirectiveDemoComponent,
    StructuralDirectiveDemoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-angular-app';
}
