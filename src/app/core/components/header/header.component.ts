import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(
        private weatherService: WeatherService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {}

    public seachForm: FormGroup = this.formBuilder.group({
        seachInput: ['', [Validators.required, Validators.minLength(3)]],
    });

    public getForecastServices(city: string) {
        this.weatherService.getForecast(city).subscribe({
            next: (res) => {
                this.weatherService.setStateForecast(res);
                this.weatherService.getNextForecastDays(city).subscribe({
                    next: (res) => {
                        this.weatherService.setStateNextForestDays(res);
                        this.navigateDashboardLink();
                    },
                    error: (err) => err,
                });
            },
            error: (err) => err,
        });
    }

    public submit() {
        if (this.seachForm.valid) {
            this.getForecastServices(this.seachForm.value.seachInput);
        }
    }

    public navigateDashboardLink() {
        if (this.router.url !== '/dashboard') this.router.navigate(['/dashboard']);
    }
}
