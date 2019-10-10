import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IWeather } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private key = 'dd6ae02360ac70b7c580755ac896adea';

  public get(city, country) {
    const weatherArray: IWeather[] = this.getWeather(city, country);

    return weatherArray;
  }

  private getWeather(city, country): IWeather[] {
    const array: IWeather[] = [];
    this.getWeatherData(city, country).subscribe(res => {
      const list = res.list;
      list.forEach(weather => {
        const date = new Date(weather.dt_txt);
        const newWeather: IWeather = {
          date: `${date.getHours()}:00 ${date.getDate()}-${date.getDay()}-${date.getFullYear()}`,
          temp: Math.round(weather.main.temp),
          tempMin: Math.round(weather.main.temp_min),
          tempMax: Math.round(weather.main.temp_max),
          humidity: weather.main.humidity,
          weather: weather.weather[0].main,
          icon: weather.weather[0].icon,
          wind: {
            speed: weather.wind.speed,
            degree: weather.wind.deg,
          }
        };
        array.push(newWeather);
        return array;
      });
      return array;

    });
    return array;
  }

  private getWeatherData(city, country): Observable<any> {
    return this.http
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&appid=${this.key}`)
      .pipe(map((response: Response) => {
        return response;
      }));
  }
}
