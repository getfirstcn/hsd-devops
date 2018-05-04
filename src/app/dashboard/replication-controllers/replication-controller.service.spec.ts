import { TestBed, inject } from '@angular/core/testing';

import { ReplicationControllerService } from './replication-controller.service';

describe('ReplicationControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReplicationControllerService]
    });
  });

  it('should be created', inject([ReplicationControllerService], (service: ReplicationControllerService) => {
    expect(service).toBeTruthy();
  }));
});
