import { IngressesRoutingModule } from './ingresses-routing.module';

describe('IngressesRoutingModule', () => {
  let ingressesRoutingModule: IngressesRoutingModule;

  beforeEach(() => {
    ingressesRoutingModule = new IngressesRoutingModule();
  });

  it('should create an instance', () => {
    expect(ingressesRoutingModule).toBeTruthy();
  });
});
