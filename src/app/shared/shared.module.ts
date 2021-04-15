import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { WeatherConditionsComponent } from './weather-conditions/weather-conditions.component';

const PIPES = [TemperaturePipe];

@NgModule({
  declarations: [
    PIPES,
    WeatherConditionsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PIPES,
    WeatherConditionsComponent
  ]
})
export class SharedModule {
}
