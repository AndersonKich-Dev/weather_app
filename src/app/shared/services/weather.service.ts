import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, catchError, of, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ForecastData, ListForecastNextDays } from 'src/app/shared/interfaces/forecast.interface';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    constructor(private http: HttpClient) {}
    private readonly API = environment.API_URL;
    private stateForecast = new BehaviorSubject<ForecastData>({} as ForecastData);
    private stateNextForestDays = new BehaviorSubject<ListForecastNextDays>({} as ListForecastNextDays);
    public error = new Subject<boolean>();

    public setStateForecast(data: ForecastData): void {
        this.stateForecast.next(data);
    }

    public getStateForecast(): Observable<ForecastData> {
        return this.stateForecast.asObservable();
    }

    public setStateNextForestDays(data: ListForecastNextDays): void {
        this.stateNextForestDays.next(data);
    }

    public getStateNextForestDays(): Observable<ListForecastNextDays> {
        return this.stateNextForestDays.asObservable();
    }

    public toggleToastError() {
        this.error.next(true);
        setTimeout(() => {
            this.error.next(false);
        }, 3000);
    }

    public getForecast(city: string): Observable<ForecastData> {
        return this.http
            .get<ForecastData>(`${this.API}/weather`, {
                params: {
                    q: city,
                    units: 'metric',
                    appid: environment.API_KEY,
                    lang: 'pt_br',
                },
            })
            .pipe(
                (res) => {
                    this.error.next(false);
                    return res;
                },
                catchError((error) => {
                    this.toggleToastError();
                    return of();
                })
            );
    }

    public getNextForecastDays(city: string): Observable<ListForecastNextDays> {
        return this.http
            .get<ListForecastNextDays>(`${this.API}/forecast`, {
                params: {
                    q: city,
                    units: 'metric',
                    appid: environment.API_KEY,
                    lang: 'pt_br',
                },
            })
            .pipe(
                (res) => res,
                catchError((error) => {
                    this.toggleToastError();
                    return of();
                })
            );
    }
}
