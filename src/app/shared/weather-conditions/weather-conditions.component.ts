import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'wa-weather-conditions',
  templateUrl: './weather-conditions.component.html',
  styleUrls: ['./weather-conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherConditionsComponent {
  @Input() info: string;
  @Input() weatherIcon: string;
  @Input() temperature: number;
  @Input() wind: number;

  public get weatherIconAddress(): string {
    return `http://openweathermap.org/img/wn/${this.weatherIcon}.png`;
  }
}
