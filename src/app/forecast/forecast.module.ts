import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityForecastComponent } from './city-forecast/city-forecast.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ForecastRoutingModule } from './forecast-routing.module';

@NgModule({
  declarations: [
    CityForecastComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ForecastRoutingModule,
  ]
})
export class ForecastModule { }
