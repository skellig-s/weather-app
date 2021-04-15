import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherConditionsComponent } from './weather-conditions.component';
import { ConditionsModel } from '../../models/conditions.model';
import { SharedModule } from '../shared.module';

describe('WeatherConditionsComponent', () => {
  let component: WeatherConditionsComponent;
  let fixture: ComponentFixture<WeatherConditionsComponent>;
  let conditionsMock: ConditionsModel;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ WeatherConditionsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherConditionsComponent);
    component = fixture.componentInstance;
    conditionsMock = {
      info: 'Title',
      weatherIcon: 'icon',
      wind: 10,
      temperature: -20
    };
    component.conditions = conditionsMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get icon address', () => {
    expect(component.weatherIconAddress).toBe(`https://openweathermap.org/img/wn/${conditionsMock.weatherIcon}.png`);
  });

  it('should get wind speed', () => {
    expect(component.windSpeed).toBe(conditionsMock.wind.toFixed(2));
  });
});
