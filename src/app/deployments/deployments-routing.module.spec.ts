import { DeploymentsRoutingModule } from './deployments-routing.module';

describe('DeploymentsRoutingModule', () => {
  let deploymentsRoutingModule: DeploymentsRoutingModule;

  beforeEach(() => {
    deploymentsRoutingModule = new DeploymentsRoutingModule();
  });

  it('should create an instance', () => {
    expect(deploymentsRoutingModule).toBeTruthy();
  });
});
