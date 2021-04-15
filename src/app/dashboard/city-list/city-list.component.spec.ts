import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityListComponent } from './city-list.component';
import { CitiesService } from '../../core/services/cities.service';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

@Component({selector: 'wa-city-card', template: ''})
class CityCardStubComponent {
  @Input() cityName: string;
}

describe('CityListComponent', () => {
  let component: CityListComponent;
  let fixture: ComponentFixture<CityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityListComponent, CityCardStubComponent ],
      providers: [
        CitiesService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 5 cities', () => {
    const cityListLength = fixture.debugElement.queryAll(By.css('wa-city-card')).length;
    expect(cityListLength).toBe(5);
  });

});
