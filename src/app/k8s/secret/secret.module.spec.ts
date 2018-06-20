import { SecretModule } from './secret.module';

describe('SecretModule', () => {
  let secretModule: SecretModule;

  beforeEach(() => {
    secretModule = new SecretModule();
  });

  it('should create an instance', () => {
    expect(secretModule).toBeTruthy();
  });
});
