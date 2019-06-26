import { Pipe, PipeTransform } from '@angular/core';

import moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: number, format: string = 'DD MMM YYYY'): any {
    return moment(value).format(format);
  }

}
