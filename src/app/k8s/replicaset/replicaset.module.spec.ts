import { ReplicasetModule } from './replicaset.module';

describe('ReplicasetModule', () => {
  let replicasetModule: ReplicasetModule;

  beforeEach(() => {
    replicasetModule = new ReplicasetModule();
  });

  it('should create an instance', () => {
    expect(replicasetModule).toBeTruthy();
  });
});
