import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // name: 'countryCode'
  name: 'customDate',
  pure: false
})
export class MyPipePipe implements PipeTransform {

  private datePipe = new DatePipe("en-US");

  transform(value: any, ...args: any[]): any {
    // if (value == undefined || value == null || (typeof (value) == "string" && value.trim() == "")) {
    //   return "NA";
    // } else {
    //   return value ? "+1" + value : value;
    // }
    return this.datePipe.transform(value, "MMMM YYYY");
  }

}
