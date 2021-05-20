import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-poollog',
  templateUrl: './poollog.component.html',
  styleUrls: ['./poollog.component.css']
})
export class PoollogComponent implements OnInit {

  poolform = new FormGroup({
    quantity : new FormControl(''),
    product : new FormControl('')
  });


  constructor() { }

  ngOnInit(): void {
  }

  setValue(value= 7.0): void {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.poolform.value);
  }

}
