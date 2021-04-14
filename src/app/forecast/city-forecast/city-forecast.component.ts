import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IForecast } from '../../models/weather.models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'wa-city-forecast',
  templateUrl: './city-forecast.component.html',
  styleUrls: ['./city-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityForecastComponent implements OnInit {
  public hourlyForecast$: Observable<IForecast[]>;

  constructor(private activeRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.hourlyForecast$ = this.activeRoute.data.pipe(
      map(({ forecast }) => forecast.hourly)
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
