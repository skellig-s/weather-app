import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IForecast } from '../../models/weather.models';
import { interval, merge, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { WeatherService } from '../../core/services/weather.service';

@Component({
  selector: 'wa-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityForecastComponent implements OnInit {
  static readonly FORECAST_REFRESH_INTERVAL = 30 * 60 * 1000;
  public hourlyForecast$: Observable<IForecast[]>;

  constructor(private activeRoute: ActivatedRoute,
              private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.hourlyForecast$ = merge(
      this.activeRoute.data.pipe(
        map(({ forecast }) => forecast)
      ),
      interval(CityForecastComponent.FORECAST_REFRESH_INTERVAL).pipe(
        switchMap(() => this.weatherService.getForecast(
          this.activeRoute.snapshot.params.lat,
          this.activeRoute.snapshot.params.lon
        )),
      )
    ).pipe(
      map((forecast) => forecast.hourly)
    );
  }

  public getInfo(dt: number): string {
    const date = new Date(dt * 1000); // unix format -> ms
    return `${date.toLocaleTimeString(navigator.language, {
      hour: 'numeric',
      minute: 'numeric'
    })}`;
  }
}
