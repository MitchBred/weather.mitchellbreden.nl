import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../services/weather.service';
import { IWeather } from '../shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weather: IWeather[];
  city = 'Kos';
  country = 'gr';

  constructor(
    private weatherService: WeatherService

  ) { }

  ngOnInit() {
    this.initWeather();
  }

  initWeather() {
    this.weather = this.weatherService.get(this.city, this.country);
  }

  setArrow(degree){
    return {
      transform: `rotate(${degree + 180}deg)`,

    }
  }

}
