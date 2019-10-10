export interface IWeather {
    date: string;
    temp: number;
    tempMin: number;
    tempMax: number;
    humidity: number;
    weather: string;
    icon: string;
    wind: {
        speed: number;
        degree: number;
    }
}