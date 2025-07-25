import { Directive, HostListener } from '@angular/core';
import { DataBankService } from '../services/data-bank.service';

@Directive({
  selector: '[appClickCount]'
})
export class ClickCountDirective {

  constructor(private dataBank: DataBankService) { }

  @HostListener('click', ['$event.target'])
  onClick() {
    this.dataBank.clickCounter++;
    console.log("Clicks counted, " + this.dataBank.clickCounter + ".")
  }

}
