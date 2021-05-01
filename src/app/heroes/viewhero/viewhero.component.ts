import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewhero',
  templateUrl: './viewhero.component.html',
  styleUrls: ['./viewhero.component.css']
})
export class ViewheroComponent implements OnInit {

  heroid= 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        console.log(params),
          this.heroid = params.id
      }
    );

  }
  ngOnInit(): void {
  }

}
