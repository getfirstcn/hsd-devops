import { IngressesModule } from './ingresses.module';

describe('IngressesModule', () => {
  let ingressesModule: IngressesModule;

  beforeEach(() => {
    ingressesModule = new IngressesModule();
  });

  it('should create an instance', () => {
    expect(ingressesModule).toBeTruthy();
  });
});
