import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {Velivert} from './velivert';
import {VelivertapiService} from './velivertapi.service';
import {HeroService} from '../heroes/hero.service';

@Component({
  selector: 'app-velivert',
  templateUrl: './velivert.component.html',
  styleUrls: ['./velivert.component.css']
})
export class VelivertComponent implements OnInit {

  veliverts: Velivert[] = [];
  velivertstr: any = 'rien';
  velivertstr1: any = 'rien';
  angularpackages: any = 'rien';
  velivertsany: any = 'rien';
  amiiboany: any = 'vide';
  gymnastes: any = 'personne';

  test: string;

  constructor(private VelivertService:VelivertapiService) { }

  ngOnInit(): void {
    //this.getVelivert();
    //this.getVelivertstr();
    this.getAngularany();
    this.getVelivertsany();
    this.getAmiiboany();
    this.getGymnastes();
  }

  getVelivert(): void{
    this.VelivertService.getVeliverts().subscribe(veliverts => this.veliverts = veliverts);
  }

  getVelivertstr(): void{
    this.VelivertService.getVelivertstr().subscribe((data => this.velivertstr1 = data));

  }

  getAngularany(): void{
    //this.velivertstr = this.VelivertService.getVelivertsany().subscribe((data => this.velivertstr = data));  //Angular Ok
    this.VelivertService.getAngularany().subscribe(data => {
        this.angularpackages = data.results;
        console.log(data.results);
      }
    );
  }

  getVelivertsany(): void{
    this.VelivertService.getVelivertsany().subscribe(data =>
     this.velivertsany = data,
        error => console.log(error)
    );
  }

  getAmiiboany(): void{
    this.VelivertService.getAmiibo().subscribe(data => this.amiiboany = data,error => console.log(error));
  }

  getGymnastes(): void{
    this.VelivertService.getGymnastes().subscribe( data => this.gymnastes = data );
  }


}
