import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherStationsComponent } from './weather-stations/weather-stations.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { DashboardComponent }   from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: WeatherDetailComponent },
    { path: 'weather', component: WeatherStationsComponent },
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {

}
