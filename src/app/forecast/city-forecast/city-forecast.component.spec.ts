import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityForecastComponent } from './city-forecast.component';
import { SharedModule } from '../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { OneCallResponse } from '../../models/weather.models';

describe('CityForecastComponent', () => {
  let component: CityForecastComponent;
  let fixture: ComponentFixture<CityForecastComponent>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CityForecastComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              forecast: forecastMockAnswer
            })
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityForecastComponent);
    component = fixture.componentInstance;
    spyOnProperty(window.navigator, 'language').and.returnValue('ru-RU');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get hour info', () => {
    expect(component.getInfo(forecastMockAnswer.hourly[0].dt)).toBe('21:00');
    expect(component.getInfo(forecastMockAnswer.hourly[1].dt)).toBe('22:00');
    expect(component.getInfo(forecastMockAnswer.hourly[2].dt)).toBe('23:00');
  });

  it('should map to hourlyForecast$', (done) => {
    component.hourlyForecast$.subscribe((data) => {
      expect(data).toEqual(forecastMockAnswer.hourly);
      done();
    });
  });

});
