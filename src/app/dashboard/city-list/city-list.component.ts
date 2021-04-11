import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wa-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  public cities = ['Amsterdam', 'Munich', 'London', 'Paris', 'Eindhoven'];

  constructor() { }

  ngOnInit(): void {
  }

}
