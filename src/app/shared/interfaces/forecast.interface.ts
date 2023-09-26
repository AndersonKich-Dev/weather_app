export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface SysInfo {
    country: string;
    id: number;
}

interface WindInfo {
    speed: number;
    deg: number;
    gust: number;
}

interface MainData {
    temp: number;
    temp_min: number;
    temp_max: number;
    feels_like: number;
    pressure: number;
    humidity: number;
}

export interface ForecastData {
    id: number;
    weather: Weather[];
    name: string;
    sys: SysInfo;
    main: MainData;
    wind: WindInfo;
    dt: Date;
}

interface ForecastNextDays {
    main: MainData;
    weather: Weather[];
    wind: WindInfo;
    dt_txt: string;
    dt: Date;
}

interface CityData {
    id: number;
    name: string;
    country: string;
}

export interface ListForecastNextDays {
    cod: string;
    list: ForecastNextDays[];
    city: CityData;
}
