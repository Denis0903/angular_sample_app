import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {

  name: String = "";
  constructor(
    private router: Router,
    private service: CityService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    let name = form.name;
    var city: City = new City;
    city.name = name;
    city.weather = '';
    this.service.addCity(city);
    this.router.navigate(['dashboard']);
  }
}
