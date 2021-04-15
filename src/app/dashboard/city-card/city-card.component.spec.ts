import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCardComponent } from './city-card.component';
import { WeatherService } from '../../core/services/weather.service';
import { of } from 'rxjs';
import { Component, Input } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({selector: 'wa-weather-conditions', template: ''})
class WeatherConditionStubComponent {
  @Input() conditions;
}

describe('CityCardComponent', () => {
  let component: CityCardComponent;
  let fixture: ComponentFixture<CityCardComponent>;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;

  const currentWeatherMock = {
    coord: {
      lon: -0.1257,
      lat: 51.5085
    },
    weather: [
      {
        id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03n'
      }
    ],
    base: 'stations',
    main: {
      temp: 6.3,
      feels_like: 4.38,
      temp_min: 5.56,
      temp_max: 7.78,
      pressure: 1033,
      humidity: 65
    },
    visibility: 10000,
    wind: {
      speed: 2.57,
      deg: 50
    },
    clouds: {
      all: 40
    },
    dt: 1618518447,
    sys: {
      type: 1,
      id: 1414,
      country: 'GB',
      sunrise: 1618463060,
      sunset: 1618512975
    },
    timezone: 3600,
    id: 2643743,
    name: 'London',
    cod: 200
  };

  beforeEach(async () => {
    weatherServiceSpy = jasmine.createSpyObj('WeatherService', ['getWeather']);
    weatherServiceSpy.getWeather.and.returnValue(of(currentWeatherMock));

    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ CityCardComponent, WeatherConditionStubComponent ],
      providers: [
        { provide: WeatherService, useValue: weatherServiceSpy },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCardComponent);
    component = fixture.componentInstance;
    component.cityName = 'name';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get background url', () => {
    expect(component.backgroundUrl).toBe('url(/assets/images/cities/name.jpeg)');
  });

  it('should get current weather', (done) => {
    component.cityInfo$.subscribe(data => {
      expect(data).toEqual(currentWeatherMock);
      done();
    });
    expect(weatherServiceSpy.getWeather).toHaveBeenCalledWith('name');
  });

});
