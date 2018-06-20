import { ConfigmapModule } from './configmap.module';

describe('ConfigmapModule', () => {
  let configmapModule: ConfigmapModule;

  beforeEach(() => {
    configmapModule = new ConfigmapModule();
  });

  it('should create an instance', () => {
    expect(configmapModule).toBeTruthy();
  });
});
