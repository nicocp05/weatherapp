import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherResponse } from './interfaces/weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  weather: WeatherResponse;

  constructor( private weatherService: WeatherService ) {}

  ngOnInit() {
  }

  submitCity(cityName: HTMLInputElement, form: HTMLFormElement) {

    this.weatherService.getWeather(cityName.value)
      .subscribe( (res: WeatherResponse) => {
        this.weather = res;
        console.log(this.weather);
    });

    form.reset();
  }

}
