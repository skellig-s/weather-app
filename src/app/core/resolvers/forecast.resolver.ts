import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { WeatherService } from '../services/weather.service';
import { ICoord, OneCallResponse } from '../../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class ForecastResolver implements Resolve<OneCallResponse> {
  private prevCoords: ICoord = { lat: null, lon: null };
  private cachedAnswer: OneCallResponse;

  constructor(private weatherService: WeatherService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OneCallResponse> {
    if (this.prevCoords.lat !== route.params.lat || this.prevCoords.lon !== route.params.lon) {
      return this.weatherService.getForecast(route.params.lat, route.params.lon);
    } else {
      return of(this.cachedAnswer);
    }
  }
}
