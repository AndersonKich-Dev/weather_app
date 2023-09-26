import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListForecastNextDays } from 'src/app/shared/interfaces/forecast.interface';

@Component({
    selector: 'app-statistics-card',
    templateUrl: './statistics-card.component.html',
    styleUrls: ['./statistics-card.component.scss'],
})
export class StatisticsCardComponent implements OnChanges {
    public forecastList!: ListForecastNextDays;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['nextForecastList'] !== undefined && changes['nextForecastList'].currentValue !== undefined) {
            const data: ListForecastNextDays = changes['nextForecastList'].currentValue;
            if (data.cod)
                this.forecastList = {
                    cod: data.cod,
                    list: data.list.slice(0, 6),
                    city: data.city,
                };
        }
    }
    @Input() nextForecastList!: ListForecastNextDays;
}
