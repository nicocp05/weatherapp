import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  URI_API: string = 'https://api.openweathermap.org/data/2.5/weather';

  // Introduce own Api Key
  apiKey: string = '';

  constructor(private http: HttpClient) { }

  getWeather( cityName: string ) {
    return this.http.get(`${this.URI_API}?q=${cityName}&appid=${this.apiKey}&units=metric`);
  }

}
