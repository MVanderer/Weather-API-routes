import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  cityName="Seattle";
  cityPicUrl='https://images.pexels.com/photos/37350/space-needle-seattle-washington-cityscape.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
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