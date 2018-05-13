import { Component, OnInit } from '@angular/core';
import {Wind} from './models/wind.enum';
import {WeatherStation} from './models/weather-station';
import {WEATHERDATA} from './mock-stations';

@Component({
  selector: 'app-weather-stations',
  templateUrl: './weather-stations.component.html',
  styleUrls: ['./weather-stations.component.scss']
})
export class WeatherStationsComponent implements OnInit {
    windEnum = Wind;
    currentView = Wind.knots;
    title = 'Weather Stations in VIC';
    weatherData = WEATHERDATA;

    constructor( ){
    }

    ngOnInit() {
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
