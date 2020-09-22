import { Injectable } from '@angular/core';
import { City } from './city';
import { HttpService } from '../HttpService';


@Injectable({
  providedIn: 'root'
})
export class CityService {
  environment = {
    production: false,
    appId: 'd531fc7e03cf71f1dbfaef79d72ba490',
    baseUrl: 'http://api.openweathermap.org/data/2.5/'
  };

  cities: City[];

  constructor(
    private service: HttpService
   ) {
    this.cities = [];
   }

  addCity(city: City): void {
    var id: number;
    id = this.cities.length + 1;
    city.id = id;

    var apiEndPoint: string = this.environment.baseUrl
    + 'weather?q=' + city.name
    + '&appid=' + this.environment.appId;

    this.service.getWeatheritemsbyCity(apiEndPoint)
    .subscribe(res => {
      var weather = res.weather[0].description;
      city.weather = weather;
      this.cities.push(city);
    }, err => {
      console.log(err);
    }, () => {

    });
  }

  getCities(): City[]{
    return this.cities;
  }
}