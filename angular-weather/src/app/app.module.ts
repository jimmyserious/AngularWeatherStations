import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherService } from './services/weather.service';
import { WeatherStationsComponent } from './weather-stations/weather-stations.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';


//import {MockXhrBackend} from './mocks/mock-xhr-backend';

@NgModule({
  declarations: [
    AppComponent,
    WeatherStationsComponent,
    WeatherDetailComponent,
    MessagesComponent,
    DashboardComponent
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
