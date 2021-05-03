import { TestBed } from '@angular/core/testing';

import { VelivertapiService } from './velivertapi.service';

describe('VelivertapiService', () => {
  let service: VelivertapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VelivertapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
