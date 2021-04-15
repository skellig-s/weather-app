import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { OneCallResponse } from '../../models/weather.models';
import { of } from 'rxjs';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  const forecastMockAnswer: OneCallResponse = {
    lat: 51.5085,
    lon: -0.1257,
    hourly: [
      {
        dt: 1618423200,
        temp: 280.97,
        wind_speed: 3.9,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03d'
          }
        ],
      },
      {
        dt: 1618426800,
        temp: 280.81,
        wind_speed: 3.02,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n'
          }
        ],
      },
      {
        dt: 1618430400,
        temp: 280.44,
        wind_speed: 2.34,
        weather: [
          {
            id: 802,
            main: 'Clouds',
            description: 'scattered clouds',
            icon: '03n'
          }
        ],
      },
    ]
  };
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

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get current weather and call get 1 time', () => {
    service.getWeather('city');

    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

  it('should get current weather info', (done) => {
    const params = new HttpParams()
      .set('q', 'city')
      .set('units', 'metric')
      .set('appid', environment.apiKey);
    httpClientSpy.get.and.returnValue(of(currentWeatherMock));

    service.getWeather('city').subscribe(response => {
      expect(response).toEqual(currentWeatherMock);
      done();
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith(
      'https://api.openweathermap.org/data/2.5/weather',
      { params }
      );
  });

  it('should get forecast and call get 1 time', () => {
    service.getForecast(1, 1);

    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });

  it('should get forecast info', (done) => {
    const params = new HttpParams()
      .set('lat', '1')
      .set('lon', '2')
      .set('exclude', 'current,minutely,daily,alerts')
      .set('units', 'metric')
      .set('appid', environment.apiKey);
    httpClientSpy.get.and.returnValue(of(forecastMockAnswer));

    service.getForecast(1, 2).subscribe(response => {
      expect(response).toEqual(forecastMockAnswer);
      done();
    });

    expect(httpClientSpy.get).toHaveBeenCalledWith(
      'https://api.openweathermap.org/data/2.5/onecall',
      { params }
      );
  });
});
