import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CitiesService } from '../../core/services/cities.service';

@Component({
  selector: 'wa-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityListComponent implements OnInit {
  public cities: string[] = [];

  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.cities = this.citiesService.getCities();
  }

}
