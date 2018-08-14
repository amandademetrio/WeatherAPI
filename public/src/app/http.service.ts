import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getForecast(city) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+',us&appid=2c45cc7854455c350c5ba088f43176c4&units=imperial')
  }
}
