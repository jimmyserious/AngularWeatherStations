import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { WeatherStation } from '../models/weather-station';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
weatherData = [
    { stationName: 'Aireys Inlet', direction: 'SW', speed:21, maxSpeed:28 },
    { stationName: 'Cape Otway', direction: 'NW', speed:4, maxSpeed:19 },
    { stationName: 'Port Fairy', direction: 'SW', speed:8, maxSpeed:10 },
];

constructor(private messageService: MessageService) { }

    getWeatherData(): Observable<WeatherStation[]> {
        // TODO: send the message _after_ fetching the heroes
        this.messageService.add('HeroService: fetched weatherdata');

        return of(this.weatherData);
    }

}
