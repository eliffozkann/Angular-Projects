import { TestBed } from '@angular/core/testing';

import { IndividualCustomerServiceTsService } from './individual-customer.service.ts.service';

describe('IndividualCustomerServiceTsService', () => {
  let service: IndividualCustomerServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualCustomerServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
