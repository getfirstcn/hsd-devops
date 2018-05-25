import { NamespaceModule } from './namespace.module';

describe('NamespaceModule', () => {
  let namespaceModule: NamespaceModule;

  beforeEach(() => {
    namespaceModule = new NamespaceModule();
  });

  it('should create an instance', () => {
    expect(namespaceModule).toBeTruthy();
  });
});
