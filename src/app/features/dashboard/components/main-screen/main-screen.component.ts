import { Component, Input } from '@angular/core';
import { ForecastData } from 'src/app/shared/interfaces/forecast.interface';

@Component({
    selector: 'app-main-screen',
    templateUrl: './main-screen.component.html',
    styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent {
    @Input() forecastData!: ForecastData;
}
