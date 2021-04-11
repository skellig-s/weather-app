export interface ICityWeather {
  main: IMainWeather;
  weather: IWeather[];
  wind: IWind;
}

export interface IMainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface IWind {
  speed: number;
  deg: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// {
//   coord: {
//   lon: 11.5755,
//     lat: 48.1374
// },
//
//   base: 'stations',
//
//   visibility: 1500,
//
//   clouds: {
//   all: 95
// },
//   dt: 1618164097,
//   sys: {
//   type: 1,
//     id: 1307,
//     country: 'DE',
//     sunrise: 1618115492,
//     sunset: 1618163847
// },
//   timezone: 7200,
//   id: 2867714,
//   name: 'Munich',
//   cod: 200
// }
