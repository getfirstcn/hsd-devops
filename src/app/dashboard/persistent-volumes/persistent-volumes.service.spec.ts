import { TestBed, inject } from '@angular/core/testing';

import { PersistentVolumesService } from './persistent-volumes.service';

describe('PersistentVolumesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersistentVolumesService]
    });
  });

  it('should be created', inject([PersistentVolumesService], (service: PersistentVolumesService) => {
    expect(service).toBeTruthy();
  }));
});
