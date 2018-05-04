import { TestBed, inject } from '@angular/core/testing';

import { DaemonSetService } from './daemon-set.service';

describe('DaemonSetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaemonSetService]
    });
  });

  it('should be created', inject([DaemonSetService], (service: DaemonSetService) => {
    expect(service).toBeTruthy();
  }));
});
