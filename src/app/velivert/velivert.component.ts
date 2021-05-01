import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-velivert',
  templateUrl: './velivert.component.html',
  styleUrls: ['./velivert.component.css']
})
export class VelivertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    axios.get('https://saint-etienne-gbfs.klervi.net/gbfs/en/station_information.json', {
      params: {
        ID: 12345
      }
    })
      .then(function (response) {
        console.log(response);
      });
  }

}
