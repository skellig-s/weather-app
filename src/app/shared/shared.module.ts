import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemperaturePipe } from './temperature.pipe';

const PIPES = [TemperaturePipe];

@NgModule({
  declarations: [
    PIPES,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PIPES
  ]
})
export class SharedModule {
}
