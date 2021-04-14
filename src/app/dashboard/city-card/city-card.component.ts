import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../core/services/weather.service';
import { Observable } from 'rxjs';
import { ICityWeather } from '../../models/weather.models';

@Component({
  selector: 'wa-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityCardComponent implements OnInit {
  @Input() cityName: string;

  public cityInfo$: Observable<ICityWeather>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.cityInfo$ = this.weatherService.getWeather(this.cityName);
  }
}
