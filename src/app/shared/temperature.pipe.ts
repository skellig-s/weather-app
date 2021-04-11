import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(temperature: number): string {
    const rounded = Math.round(temperature);
    return `${rounded > 0 ? '+' : ''}${rounded}°C`;
  }

}
