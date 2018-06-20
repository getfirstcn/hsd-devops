import { TestBed, inject } from '@angular/core/testing';

import { ReplicationctrollersService } from './replicationctrollers.service';

describe('ReplicationctrollersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReplicationctrollersService]
    });
  });

  it('should be created', inject([ReplicationctrollersService], (service: ReplicationctrollersService) => {
    expect(service).toBeTruthy();
  }));
});
