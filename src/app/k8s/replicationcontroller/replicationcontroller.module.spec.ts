import { ReplicationcontrollerModule } from './replicationcontroller.module';

describe('ReplicationcontrollerModule', () => {
  let replicationcontrollerModule: ReplicationcontrollerModule;

  beforeEach(() => {
    replicationcontrollerModule = new ReplicationcontrollerModule();
  });

  it('should create an instance', () => {
    expect(replicationcontrollerModule).toBeTruthy();
  });
});
