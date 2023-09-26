import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ForecastData, ListForecastNextDays } from 'src/app/shared/interfaces/forecast.interface';

@Component({
    selector: 'app-side-information',
    templateUrl: './side-information.component.html',
    styleUrls: ['./side-information.component.scss'],
})
export class SideInformationComponent implements OnInit, OnChanges {
    ngOnInit(): void {
        this.currentTime();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['nextForecastList'] !== undefined && changes['nextForecastList'].currentValue !== undefined) {
            const array = [];
            const data: ListForecastNextDays = changes['nextForecastList'].currentValue;
            if (data.list) {
                for (let i = 0; i < data.list.length; i++) {
                    if (i % 8 === 0) {
                        array.push(data.list[i]);
                    }
                }
            }

            this.forecastList = {
                cod: data.cod,
                list: array,
                city: data.city,
            };
        }
    }
    public today = Date.now();
    public forecastSelectDays = 5;
    public forecastList!: ListForecastNextDays;

    @Input() forecastDay!: ForecastData;
    @Input() nextForecastList!: ListForecastNextDays;

    public toggleForecatSelect(days: number): void {
        this.forecastSelectDays = days;
    }

    public currentTime() {
        setInterval(() => {
            this.today = Date.now();
        }, 60000);
    }
}
