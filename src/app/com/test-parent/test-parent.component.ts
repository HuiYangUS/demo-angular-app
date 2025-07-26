import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { TestChildComponent } from '../test-child/test-child.component';
import { FormsModule } from '@angular/forms';
import { TestBrotherComponent } from '../test-brother/test-brother.component';
import { TestSisterComponent } from '../test-sister/test-sister.component';
import { ReusableComponent } from '../../reusable/reusable.component';

@Component({
  selector: 'app-test-parent',
  imports: [
    TestChildComponent,
    FormsModule,
    TestBrotherComponent,
    TestSisterComponent,
    ReusableComponent
  ],
  templateUrl: './test-parent.component.html',
  styleUrl: './test-parent.component.scss'
})
export class TestParentComponent implements AfterViewInit {

  @ViewChild('reusable') reusableCom!: ReusableComponent;

  ngAfterViewInit(): void {
    this.reusableCom.displayMessage = "To demo using @ViewChild!"
  }

  displayMessage: string = "";

  onSubmit() {
    this.reusableCom.displayMessage = this.displayMessage;
  }

  @Input() parentProperty: string = "";

  @Input() testBrotherData: any;

  @Input() testSisterData: any;

  testParentData: any;

  resetInput() {
    this.parentProperty = "";
  }

  receive(data: any) {
    this.testParentData = data;
  }

  receiveFromBrother(data: any) {
    console.log("Brother said: " + data);
    this.testBrotherData = data;
  }

  receiveFromSister(data: any) {
    console.log("Sister said: " + data);
    this.testSisterData = data;
  }

}
