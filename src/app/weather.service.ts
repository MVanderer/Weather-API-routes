import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiAdress='https://api.openweathermap.org/data/2.5/weather?q=';
  apiKey='2e60b00ea3ae8956972c90510ffcddf1'
  constructor(private _http:HttpClient) {

  }
  getCity(city){
    let url = this.apiAdress+city+"&appid="+this.apiKey;
    return this._http.get(url);
  }
}
