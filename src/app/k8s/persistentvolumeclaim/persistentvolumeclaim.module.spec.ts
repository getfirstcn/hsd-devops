import { PersistentvolumeclaimModule } from './persistentvolumeclaim.module';

describe('PersistentvolumeclaimModule', () => {
  let persistentvolumeclaimModule: PersistentvolumeclaimModule;

  beforeEach(() => {
    persistentvolumeclaimModule = new PersistentvolumeclaimModule();
  });

  it('should create an instance', () => {
    expect(persistentvolumeclaimModule).toBeTruthy();
  });
});
