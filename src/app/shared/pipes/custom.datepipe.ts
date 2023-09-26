import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormatDate } from '../util/formatDate';

@Pipe({
    name: 'customDate',
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
    override transform(value: any, args?: any): any {
        return super.transform(value, FormatDate.DATE_SMD);
    }
}
