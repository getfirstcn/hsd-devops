import { TestBed, inject } from '@angular/core/testing';

import { PersistentVolumeClaimsService } from './persistent-volume-claims.service';

describe('PersistentVolumeClaimsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistentVolumeClaimsService]
    });
  });

  it('should be created', inject([PersistentVolumeClaimsService], (service: PersistentVolumeClaimsService) => {
    expect(service).toBeTruthy();
  }));
});
