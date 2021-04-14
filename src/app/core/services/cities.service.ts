import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  // Could be altered for usage of a dynamic cities list
  private readonly CITY_LIST: string[] = ['Amsterdam', 'Munich', 'London', 'Paris', 'Eindhoven'];

  constructor() { }

  public getCities(): string[] {
    return this.CITY_LIST;
  }
}
