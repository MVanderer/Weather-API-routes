import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  cityName="95112";
  cityPicUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Valencia_Hotel%2C_Santana_Row_%28cropped%29.jpg/1280px-Valencia_Hotel%2C_Santana_Row_%28cropped%29.jpg';
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