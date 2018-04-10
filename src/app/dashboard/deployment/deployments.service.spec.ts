import { TestBed, inject } from '@angular/core/testing';

import { DeploymentsService } from './deployments.service';

describe('DeploymentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeploymentsService]
    });
  });

  it('should be created', inject([DeploymentsService], (service: DeploymentsService) => {
    expect(service).toBeTruthy();
  }));
});
