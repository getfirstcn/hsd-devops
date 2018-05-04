import { TestBed, inject } from '@angular/core/testing';

import { ReplicaSetService } from './replica-set.service';

describe('ReplicaSetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReplicaSetService]
    });
  });

  it('should be created', inject([ReplicaSetService], (service: ReplicaSetService) => {
    expect(service).toBeTruthy();
  }));
});
