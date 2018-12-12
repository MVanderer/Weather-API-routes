import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  cityName="Burbank";
  cityPicUrl='https://upload.wikimedia.org/wikipedia/commons/f/fe/Burbank_media_district_from_Griffith_Park_2015-11-07.jpg';
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
