import { TestBed, inject } from '@angular/core/testing';

import { PodsService } from './pods.service';

describe('PodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PodsService]
    });
  });

  it('should be created', inject([PodsService], (service: PodsService) => {
    expect(service).toBeTruthy();
  }));
});
