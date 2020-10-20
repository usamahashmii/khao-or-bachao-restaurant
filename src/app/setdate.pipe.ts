import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setdate'
})
export class SetdatePipe implements PipeTransform {
  date: Date;
  currentYear: Date;
  date_split: any;
  again_split: any;
  complete_date: string;

  transform(value: any, ...args: any[]): any {
    let dateString = value;
    this.date_split = dateString.split(" ");
    return this.date_split[0];
  }

}
