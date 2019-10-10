export interface IWeather {
    temp: number;
    tempMin: number;
    tempMax: number;
    humidity: number;
    weather: string;
    icon: string;
    wind: {
        speed: number;
        degree: number;
    };
  dt_txt: string;
}
