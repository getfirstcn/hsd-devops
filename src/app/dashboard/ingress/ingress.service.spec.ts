import { TestBed, inject } from '@angular/core/testing';

import { IngressService } from './ingress.service';

describe('IngressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngressService]
    });
  });

  it('should be created', inject([IngressService], (service: IngressService) => {
    expect(service).toBeTruthy();
  }));
});
