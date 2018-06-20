import { TestBed, inject } from '@angular/core/testing';

import { PersistentvolumeclaimService } from './persistentvolumeclaim.service';

describe('PersistentvolumeclaimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistentvolumeclaimService]
    });
  });

  it('should be created', inject([PersistentvolumeclaimService], (service: PersistentvolumeclaimService) => {
    expect(service).toBeTruthy();
  }));
});
