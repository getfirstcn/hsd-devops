import { StatefulsetModule } from './statefulset.module';

describe('StatefulsetModule', () => {
  let statefulsetModule: StatefulsetModule;

  beforeEach(() => {
    statefulsetModule = new StatefulsetModule();
  });

  it('should create an instance', () => {
    expect(statefulsetModule).toBeTruthy();
  });
});
