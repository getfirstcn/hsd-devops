import { TestBed, inject } from '@angular/core/testing';

import { DeploymentsServiceService } from './deployments-service.service';

describe('DeploymentsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeploymentsServiceService]
    });
  });

  it('should be created', inject([DeploymentsServiceService], (service: DeploymentsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
