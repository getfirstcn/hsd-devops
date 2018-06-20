import { TestBed, inject } from '@angular/core/testing';

import { ReplicasetsService } from './replicasets.service';

describe('ReplicatsetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReplicasetsService]
    });
  });

  it('should be created', inject([ReplicasetsService], (service: ReplicasetsService) => {
    expect(service).toBeTruthy();
  }));
});
