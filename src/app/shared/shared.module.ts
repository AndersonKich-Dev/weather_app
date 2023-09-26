import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { CustomDatePipe } from './pipes/custom.datepipe';
import { CustomDateTimePipe } from './pipes/custom.dateTimepipe';
import { FormatNumberPipe } from './pipes/format-number.pipe';
registerLocaleData(localePT, 'pt');

@NgModule({
    declarations: [CustomDatePipe, CustomDateTimePipe, FormatNumberPipe],
    imports: [CommonModule, HttpClientModule],
    exports: [CustomDatePipe, CustomDateTimePipe, FormatNumberPipe],
    providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
})
export class SharedModule {}
