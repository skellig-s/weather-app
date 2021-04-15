import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ConditionsModel } from '../../models/conditions.model';

@Component({
  selector: 'wa-weather-conditions',
  templateUrl: './weather-conditions.component.html',
  styleUrls: ['./weather-conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherConditionsComponent {
  @Input() conditions: ConditionsModel = {};

  public get weatherIconAddress(): string {
    return `https://openweathermap.org/img/wn/${this.conditions.weatherIcon}.png`;
  }
}
