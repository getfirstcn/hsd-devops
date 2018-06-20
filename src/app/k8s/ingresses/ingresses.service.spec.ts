import { TestBed, inject } from '@angular/core/testing';

import { IngressesService } from './ingresses.service';

describe('IngressesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngressesService]
    });
  });

  it('should be created', inject([IngressesService], (service: IngressesService) => {
    expect(service).toBeTruthy();
  }));
});
