export interface OneCallResponse {
  hourly: IForecast[];
}

export interface IForecast {
  dt: number;
  temp: number;
  weather: IWeather;
  wind_speed: number;
}

export interface ICityWeather {
  coord: ICoord;
  name: string;
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
export interface ICoord {
  lat: number;
  lon: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
