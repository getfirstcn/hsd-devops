import { NodeRoutingModule } from './node-routing.module';

describe('NodeRoutingModule', () => {
  let nodeRoutingModule: NodeRoutingModule;

  beforeEach(() => {
    nodeRoutingModule = new NodeRoutingModule();
  });

  it('should create an instance', () => {
    expect(nodeRoutingModule).toBeTruthy();
  });
});
