import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherService } from '../services/weather.service';
import { OneCallResponse } from '../../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class ForecastResolver implements Resolve<OneCallResponse> {

  constructor(private weatherService: WeatherService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OneCallResponse> {
    return this.weatherService.getForecast(route.params.lat, route.params.lon);
  }
}
