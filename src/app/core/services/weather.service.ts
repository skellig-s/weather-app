import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, timer } from 'rxjs';
import { ICityWeather, OneCallResponse } from '../../models/weather.models';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly REFRESH_INTERVAL = 5 * 60 * 1000; // 5 min

  constructor(private httpClient: HttpClient) {
  }

  public getWeather(city: string): Observable<ICityWeather> {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', environment.apiKey);
    return timer(0, this.REFRESH_INTERVAL).pipe(
      switchMap(_ => this.httpClient.get<ICityWeather>(`${environment.apiHost}/data/2.5/weather`, { params }))
    );
  }

  public getForecast(lat: number, lon: number): Observable<OneCallResponse> {
    const params = new HttpParams()
      .set('lat', lat.toString())
      .set('lon', lon.toString())
      .set('exclude', 'current,minutely,daily,alerts')
      .set('units', 'metric')
      .set('appid', environment.apiKey);
    return this.httpClient.get<OneCallResponse>(`${environment.apiHost}/data/2.5/onecall`, { params });
  }
}
