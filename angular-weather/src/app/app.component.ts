import { Component, Inject } from '@angular/core';
import {Wind} from './components/weather-stations/models/wind.enum'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  windEnum = Wind;
  currentView = Wind.knots;
  title = 'Weather Stations in VIC';
  constructor( @Inject( 'weather' ) private weather ){

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
