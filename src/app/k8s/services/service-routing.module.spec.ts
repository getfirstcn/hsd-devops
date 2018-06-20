import { ServicesRoutingModule } from './service-routing.module';

describe('ServiceRoutingModule', () => {
  let serviceRoutingModule: ServicesRoutingModule;

  beforeEach(() => {
    serviceRoutingModule = new ServicesRoutingModule();
  });

  it('should create an instance', () => {
    expect(serviceRoutingModule).toBeTruthy();
  });
});
