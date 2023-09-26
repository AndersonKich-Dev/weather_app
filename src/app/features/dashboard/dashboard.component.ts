import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { ForecastData, ListForecastNextDays } from 'src/app/shared/interfaces/forecast.interface';

@Component({
    selector: 'app-dashboard',
    template: `
        <div class="dashboard-container">
            <div class="dashboard-main-wrapper">
                <app-main-screen [forecastData]="forecast" />
                <app-statistics-card [nextForecastList]="nextForecastList" />
            </div>
            <app-side-information [forecastDay]="forecast" [nextForecastList]="nextForecastList" />
        </div>
    `,
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private weatherService: WeatherService) {}
    ngOnInit(): void {
        this.weatherService.getStateForecast().subscribe((data) => {
            this.forecast = data;
        });

        this.weatherService.getStateNextForestDays().subscribe((data) => {
            this.nextForecastList = data;
        });
    }

    public forecast!: ForecastData;
    public nextForecastList!: ListForecastNextDays;
}
