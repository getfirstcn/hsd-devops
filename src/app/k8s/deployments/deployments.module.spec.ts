import { DeploymentsModule } from './deployments.module';

describe('DeploymentsModule', () => {
  let deploymentsModule: DeploymentsModule;

  beforeEach(() => {
    deploymentsModule = new DeploymentsModule();
  });

  it('should create an instance', () => {
    expect(deploymentsModule).toBeTruthy();
  });
});
