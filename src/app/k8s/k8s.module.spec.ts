import { K8sModule } from './k8s.module';

describe('K8sModule', () => {
  let k8sModule: K8sModule;

  beforeEach(() => {
    k8sModule = new K8sModule();
  });

  it('should create an instance', () => {
    expect(k8sModule).toBeTruthy();
  });
});
