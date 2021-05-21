import { Component, OnInit } from '@angular/core';

import { FormControl,FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';


@Component({
  selector: 'app-poollog',
  templateUrl: './poollog.component.html',
  styleUrls: ['./poollog.component.css']
})
export class PoollogComponent implements OnInit {


  // poolform = new FormGroup({
  //   quantity : new FormControl(''),
  //   product : new FormControl(''),
  //   date : new FormControl('')
  // });

  poolform = this.pf.group({
    quantity: ['200',[Validators.required,Validators.max(1000)]],
    product: ['Chlore',Validators.required],
    who: [''],
    date: [''],
    aliases: this.pf.array([
      this.pf.control('')
    ])
  });

  constructor(private pf: FormBuilder) { }

  ngOnInit(): void {
  }

  setValue(value= 7.0): void {

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.poolform.value);
  }

  updateValue() {
    this.poolform.patchValue({
        quantity : 200,
        product : "Ph+"
      }
    );
  }

  get aliases() {
    return this.poolform.get('aliases') as FormArray;
  }

  get hello() {
    return "hello " + this.poolform.get('product').value;
  }

  addAlias() {
    this.aliases.push(this.pf.control(''));
  }

  delAliad(id){
    this.aliases.removeAt(id);
  }





}
