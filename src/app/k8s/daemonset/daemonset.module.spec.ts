import { DaemonsetModule } from './daemonset.module';

describe('DaemonsetModule', () => {
  let daemonsetModule: DaemonsetModule;

  beforeEach(() => {
    daemonsetModule = new DaemonsetModule();
  });

  it('should create an instance', () => {
    expect(daemonsetModule).toBeTruthy();
  });
});
