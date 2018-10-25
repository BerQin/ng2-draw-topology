import { DrawTopologyModule } from './draw-topology.module';

describe('DrawTopologyModule', () => {
  let drawTopologyModule: DrawTopologyModule;

  beforeEach(() => {
    drawTopologyModule = new DrawTopologyModule();
  });

  it('should create an instance', () => {
    expect(drawTopologyModule).toBeTruthy();
  });
});
