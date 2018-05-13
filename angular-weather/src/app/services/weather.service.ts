import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { WeatherStation } from '../models/weather-station';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
weatherData = [
    { stationName: 'Aireys Inlet', direction: 'SW', speed:21, maxSpeed:28 },
    { stationName: 'Cape Otway', direction: 'NW', speed:4, maxSpeed:19 },
    { stationName: 'Port Fairy', direction: 'SW', speed:8, maxSpeed:10 },
];
  constructor() { }

    getWeatherData(): Observable<WeatherStation[]> {
        return of(this.weatherData);
    }

}
