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

  private key = '8515df84ce98b740779f788f70a9428d';

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
          dt_txt: weather.dt_txt,
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
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${this.key}`)
      .pipe(map((response: Response) => {
        return response;
      }));
  }
}
