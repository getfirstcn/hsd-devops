import { CronjobModule } from './cronjob.module';

describe('CronjobModule', () => {
  let cronjobModule: CronjobModule;

  beforeEach(() => {
    cronjobModule = new CronjobModule();
  });

  it('should create an instance', () => {
    expect(cronjobModule).toBeTruthy();
  });
});
