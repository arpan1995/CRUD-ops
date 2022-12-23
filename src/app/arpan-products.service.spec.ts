import { TestBed } from '@angular/core/testing';

import { ArpanProductsService } from './arpan-products.service';

describe('ArpanProductsService', () => {
  let service: ArpanProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArpanProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
