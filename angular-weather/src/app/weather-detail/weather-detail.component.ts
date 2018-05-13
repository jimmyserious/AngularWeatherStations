import { Component, OnInit, Input } from '@angular/core';
import { WeatherStation } from '../models/weather-station';


@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent implements OnInit {
@Input () station: WeatherStation;

  constructor() { }

  ngOnInit() {
  }

}
