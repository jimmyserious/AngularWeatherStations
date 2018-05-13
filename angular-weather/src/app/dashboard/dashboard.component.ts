import { Component, OnInit } from '@angular/core';
import { WeatherStation } from '../models/weather-station';
import { WeatherService } from '../services/weather.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
    weatherData: WeatherStation[] = [];

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {
        this.getWeatherData();
    }

    getWeatherData(): void {
        this.weatherService.getWeatherData()
            .subscribe( weatherData => this.weatherData = weatherData );
    }
}
