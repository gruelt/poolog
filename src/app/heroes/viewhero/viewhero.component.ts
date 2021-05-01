import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewhero',
  templateUrl: './viewhero.component.html',
  styleUrls: ['./viewhero.component.css']
})
export class ViewheroComponent implements OnInit {


  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => console.log(params) );
  }
  ngOnInit(): void {
  }

}
