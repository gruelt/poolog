import { TestBed } from '@angular/core/testing';

import { LaragymService } from './laragym.service';

describe('LaragymService', () => {
  let service: LaragymService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaragymService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
