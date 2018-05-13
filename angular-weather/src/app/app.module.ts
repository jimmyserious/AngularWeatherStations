import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherService } from './services/weather.service';
import { WeatherStationsComponent } from './components/weather-stations/weather-stations.component';


//import {MockXhrBackend} from './mocks/mock-xhr-backend';

@NgModule({
  declarations: [
    AppComponent,
    WeatherStationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule
      //HttpClientModule,
      //HttpXhrBackend
  ],
  providers: [
      /*{provide: HttpXhrBackend, useClass: HttpXhrBackend}*/
      { provide: 'weather', useClass: WeatherService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
