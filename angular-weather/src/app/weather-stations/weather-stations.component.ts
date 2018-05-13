import { Component, OnInit } from '@angular/core';
import {Wind} from '../models/wind.enum';
import {WeatherStation} from '../models/weather-station';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather-stations',
  templateUrl: './weather-stations.component.html',
  styleUrls: ['./weather-stations.component.scss']
})
export class WeatherStationsComponent implements OnInit {
    windEnum = Wind;
    currentView = Wind.knots;
    title = 'Weather Stations in VIC';
    weatherData : WeatherStation[];
    selectedStation: WeatherStation;

    constructor( private weatherService: WeatherService ){

    }

    ngOnInit() {
        this.getWeatherData();
    }

    getWeatherData(): void {
        this.weatherService.getWeatherData()
            .subscribe( weatherData => this.weatherData = weatherData );
    }

    onSelect(station:WeatherStation){
      this.selectedStation = station;
    }

    changeDisplay( valueIn:Wind ){
        this.currentView = valueIn;
    }

    convertKnots( numIn ){
        if ( this.currentView == Wind.knots){
            return numIn;
        }else{
            return numIn * 1.852;
        }
    }

    getCurrentDisplay( metric ){
        if ( metric == Wind.knots){
            return 'Knots';
        }else{
            return 'Km/h';
        }
    }
}
