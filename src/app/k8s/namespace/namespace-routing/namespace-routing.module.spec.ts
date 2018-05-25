import { NamespaceRoutingModule } from './namespace-routing.module';

describe('NamespaceRoutingModule', () => {
  let namespaceRoutingModule: NamespaceRoutingModule;

  beforeEach(() => {
    namespaceRoutingModule = new NamespaceRoutingModule();
  });

  it('should create an instance', () => {
    expect(namespaceRoutingModule).toBeTruthy();
  });
});
