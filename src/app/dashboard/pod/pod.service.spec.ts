import { TestBed, inject } from '@angular/core/testing';

import { PodService } from './pod.service';

describe('PodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PodService]
    });
  });

  it('should be created', inject([PodService], (service: PodService) => {
    expect(service).toBeTruthy();
  }));
});
