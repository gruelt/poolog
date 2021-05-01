import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewheroComponent } from './viewhero.component';
import {ActivatedRoute} from "@angular/router";




describe('ViewheroComponent', () => {
  let component: ViewheroComponent;
  let fixture: ComponentFixture<ViewheroComponent>;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
