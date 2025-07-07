import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * This demo all 3 types of structural directives of
 * if (else if, else), for loop, switch 
 */
@Component({
  selector: 'app-structural-directive-demo',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive-demo.component.html',
  styleUrl: './structural-directive-demo.component.scss'
})
export class StructuralDirectiveDemoComponent {

  ifFuncText: string = "@if()";

  isChecked: boolean = false;
  isHidden: boolean = true;
  inputA: string = "";
  target: string = "";
  isEmpty: boolean = true;

  onClick() {
    // Update checkbox status
    this.isChecked = !this.isChecked;
  }

  clickShowTarget() {
    this.isHidden = false;
  }

  clickHideTarget() {
    this.isHidden = true;
  }

  findEmptyValue() {
    this.inputA = this.inputA.trim();
    this.target = this.target.trim();
    this.isEmpty = this.inputA === this.target && this.inputA.trim().length === 0;
  }

  forFuncText: string = "@for()";

  employees: any[] = [
    {
      empNumber: 101,
      empName: "John Smith",
      empEmail: "john.smith@test.com",
      empTitle: "Clerk"
    },
    {
      empNumber: 102,
      empName: "Mary Weaver",
      empEmail: "mary.weaver@test.com",
      empTitle: "Clerk"
    },
    {
      empNumber: 103,
      empName: "Hui Yang",
      empEmail: "hui.yang@test.com",
      empTitle: "CEO"
    },
    {
      empNumber: 104,
      empName: "Jane Doe",
      empEmail: "jane.doe@test.com",
      empTitle: "Manager"
    }
  ]

  targetList: string[] = ["Google", "Amazon", "Microsoft"];

  emptyList: string[] = [];

  switchFuncText: string = "@switch()";

  targetScore: number = 0;

  setScore(score: number) {
    this.targetScore = score;
  }

}
