import { Component, OnInit } from '@angular/core';
import { LaragymService} from '../laragym.service';

@Component({
  selector: 'app-gymnastes-all',
  templateUrl: './gymnastes-all.component.html',
  styleUrls: ['./gymnastes-all.component.css']
})
export class GymnastesAllComponent implements OnInit {
  gymnaste: any ;
  gymnastes: any[] = [];
  saisons: any ;
  test: any[] = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ];

  constructor(private laragym:LaragymService) { }

  ngOnInit(): void {
    this.getGymnastes();
    this.getGymnaste();
    this.getSaisons();
  }

  getGymnastes(): void {
    this.laragym.getGymnastes().subscribe( data => this.gymnastes = data );
  }

  getGymnaste(): void{
    this.laragym.getGymnaste().subscribe( data => this.gymnaste = data);
  }

  getSaisons(): void{
    this.laragym.getSaisons().subscribe( data => this.saisons = data);
  }

}
