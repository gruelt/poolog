import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelivertComponent } from './velivert.component';

describe('VelivertComponent', () => {
  let component: VelivertComponent;
  let fixture: ComponentFixture<VelivertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelivertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelivertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
