import { TestBed, inject } from '@angular/core/testing';

import { ConfigMapService } from './config-map.service';

describe('ConfigMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigMapService]
    });
  });

  it('should be created', inject([ConfigMapService], (service: ConfigMapService) => {
    expect(service).toBeTruthy();
  }));
});
