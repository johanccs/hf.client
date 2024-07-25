import { TestBed } from '@angular/core/testing';

import { CartcountServiceService } from './cartcount-service.service';

describe('CartcountServiceService', () => {
  let service: CartcountServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartcountServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
