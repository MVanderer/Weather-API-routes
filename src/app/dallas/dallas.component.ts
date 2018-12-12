import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  cityName="Dallas";
  cityPicUrl='https://images.pexels.com/photos/45182/dallas-texas-skyline-dusk-45182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
  city:any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _weatherServ: WeatherService

  ) { }

  ngOnInit() {
  // this._route.params.subscribe((params: Params) => {
  //     console.log(params['id'])
  // });
  let observer =this._weatherServ.getCity(this.cityName);
  observer.subscribe(data=>{
    this.city=data;
    console.log(this.city);
  });
  
  }

}
