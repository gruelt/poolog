import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecordComponent } from './record/record.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VelivertComponent } from './velivert/velivert.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewheroComponent } from './heroes/viewhero/viewhero.component';


// Url Parameters / data
import {FormsModule} from '@angular/forms';

// Httprequest
import { HttpClientModule } from '@angular/common/http';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecordComponent,
    VelivertComponent,
    HeroesComponent,
    ViewheroComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
