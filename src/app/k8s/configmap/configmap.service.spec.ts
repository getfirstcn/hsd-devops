import { TestBed, inject } from '@angular/core/testing';

import { ConfigmapService } from './configmap.service';

describe('ConfigmapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfigmapService]
    });
  });

  it('should be created', inject([ConfigmapService], (service: ConfigmapService) => {
    expect(service).toBeTruthy();
  }));
});
