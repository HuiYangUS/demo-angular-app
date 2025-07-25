import { NgIf } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { ClickCountDirective } from '../directives/click-count.directive';
import { DataBankService } from '../services/data-bank.service';

@Component({
  selector: 'app-directive-demo',
  imports: [ClickCountDirective],
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.scss'
})
export class DirectiveDemoComponent implements OnDestroy {

  currentCount: number = 0;

  constructor(private dataBank: DataBankService) {
    this.currentCount = dataBank.clickCounter;
  }

  refreshCount() {
    this.currentCount = this.dataBank.clickCounter;
  }

  ngOnDestroy(): void {
    this.dataBank.clickCounter = 0;
  }

}
