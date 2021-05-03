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

  veliverts: Velivert[]=[];
  velivertstr: string="rien";

  test: string;

  constructor(private VelivertService:VelivertapiService) { }

  ngOnInit(): void {
    this.getVelivert();
    this.getVelivertstr();
  }

  getVelivert(): void{
    this.VelivertService.getVeliverts().subscribe(veliverts => this.veliverts = veliverts);
  }

  getVelivertstr(): void{
    this.VelivertService.getVelivertstr().subscribe((data => this.velivertstr = data));
  }



}
