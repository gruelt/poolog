import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymnastesAllComponent } from './gymnastes-all.component';

describe('GymnastesAllComponent', () => {
  let component: GymnastesAllComponent;
  let fixture: ComponentFixture<GymnastesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymnastesAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymnastesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
