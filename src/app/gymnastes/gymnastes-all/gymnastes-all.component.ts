import { Component, OnInit } from '@angular/core';
import { LaragymService} from '../laragym.service';

@Component({
  selector: 'app-gymnastes-all',
  templateUrl: './gymnastes-all.component.html',
  styleUrls: ['./gymnastes-all.component.css']
})
export class GymnastesAllComponent implements OnInit {

  gymnastes: any[];

  constructor(private laragym:LaragymService) { }

  ngOnInit(): void {
    this.getGymnastes();
  }

  getGymnastes(): void {
    this.laragym.getGymnastes().subscribe( data => this.gymnastes = data );
  }

}
