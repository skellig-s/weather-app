import { TestBed } from '@angular/core/testing';

import { ForecastResolver } from './forecast.resolver';
import { of } from 'rxjs';
import { WeatherService } from '../services/weather.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OneCallResponse } from '../../models/weather.models';

describe('ForecastResolver', () => {
  let resolver: ForecastResolver;
  let activatedRouteSnapshot: ActivatedRouteSnapshot;
  let weatherServiceSpy: jasmine.SpyObj<WeatherService>;
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

  beforeEach(() => {
    weatherServiceSpy = jasmine.createSpyObj('WeatherService', ['getForecast']);
    weatherServiceSpy.getForecast.and.returnValue(of(forecastMockAnswer));

    TestBed.configureTestingModule({
      providers: [
        { provide: WeatherService, useValue: weatherServiceSpy },
        { provide: ActivatedRouteSnapshot, useValue: { params: { lat: 1, lon: 2 } } }
      ]}
    );
    activatedRouteSnapshot = TestBed.inject(ActivatedRouteSnapshot);
    resolver = TestBed.inject(ForecastResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should resolve info from http call', (done) => {
    resolver.resolve(activatedRouteSnapshot, {} as RouterStateSnapshot).subscribe(data => {
      expect(data).toEqual(forecastMockAnswer);
      done();
    });
  });
});
