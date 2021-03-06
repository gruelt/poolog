import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecordComponent } from './record/record.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VelivertComponent } from './velivert/velivert.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ViewheroComponent } from './heroes/viewhero/viewhero.component';

import { GymnastesAllComponent } from './gymnastes/gymnastes-all/gymnastes-all.component';



// Url Parameters / data
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Httprequest
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';


import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';

//Materials
import {MatSliderModule} from '@angular/material/slider';
import { LoginComponent } from './auth/login/login.component';
import { PoollogComponent } from './poollog/poollog.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecordComponent,
    VelivertComponent,
    HeroesComponent,
    ViewheroComponent,
    HeroDetailComponent,
    GymnastesAllComponent,
    LoginComponent,
    PoollogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientJsonpModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
