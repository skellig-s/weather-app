import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { ICityWeather } from '../../models/CityWeather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {
  }

  public getWeather(city: string): Observable<ICityWeather> {
    const params = new HttpParams().set('q', city).set('appid', environment.apiKey).set('units', 'metric');
    return this.httpClient.get<ICityWeather>(`${environment.apiHost}/data/2.5/weather`, { params })
      .pipe(
      );
  }
}
