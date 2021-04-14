import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityForecastComponent } from './city-forecast/city-forecast.component';
import { ForecastResolver } from '../core/resolvers/forecast.resolver';

const routes: Routes = [
  {
    path: ':lat/:lon',
    component: CityForecastComponent,
    resolve: {
      forecast: ForecastResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForecastRoutingModule { }
