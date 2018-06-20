import { TestBed, inject } from '@angular/core/testing';

import { StatefulsetsService } from './statefulsets.service';

describe('StatefulsetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatefulsetsService]
    });
  });

  it('should be created', inject([StatefulsetsService], (service: StatefulsetsService) => {
    expect(service).toBeTruthy();
  }));
});
