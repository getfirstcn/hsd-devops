import { PodsModule } from './pods.module';

describe('PodsModule', () => {
  let podsModule: PodsModule;

  beforeEach(() => {
    podsModule = new PodsModule();
  });

  it('should create an instance', () => {
    expect(podsModule).toBeTruthy();
  });
});
