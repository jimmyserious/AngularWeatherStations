import { Component, OnInit, Input } from '@angular/core';
import { WeatherStation } from '../models/weather-station';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WeatherService } from '../services/weather.service';


@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
@Input () station: WeatherStation;

  constructor(private route: ActivatedRoute,
              private weatherService: WeatherService,
              private location: Location) { }

    ngOnInit(): void {
        this.getStation();
    }

    getStation(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.weatherService.getWeatherStation(id)
            .subscribe(station => this.station = station);
    }

    goBack(): void {
        this.location.back();
    }

}
