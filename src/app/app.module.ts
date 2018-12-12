import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';

@NgModule({
   declarations: [
      AppComponent,
      BurbankComponent,
      ChicagoComponent,
      DallasComponent,
      SanJoseComponent,
      SeattleComponent,
      WashingtonComponent,
      PageNotFoundComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
   ],
   providers: [
       WeatherService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
