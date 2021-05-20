import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoollogComponent } from './poollog.component';

describe('PoollogComponent', () => {
  let component: PoollogComponent;
  let fixture: ComponentFixture<PoollogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoollogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoollogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
