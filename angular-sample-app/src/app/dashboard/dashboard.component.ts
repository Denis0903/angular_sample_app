import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../city/city';
import { CityService } from '../city/city.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cities: City[];

  constructor(
    private router: Router,
    private service: CityService
  ){ } 

  ngOnInit() {
    this.cities = this.service.getCities();
  }

}
