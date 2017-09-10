import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'dayDifference'})
export class DayDifferencePipe implements PipeTransform {
  transform(value: string): string {
    moment.updateLocale('en', {
        calendar : {
            lastDay : '[yesterday]',
            sameDay : '[today]',
            nextDay : '[tomorrow]',
            lastWeek : '[last] dddd',
            nextWeek : 'dddd',
            sameElse : 'L'
        }
    });
    console.log(value);
    return moment(value).calendar()
  }
}