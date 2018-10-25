import { DomModule } from './dom.module';

describe('DomModule', () => {
  let domModule: DomModule;

  beforeEach(() => {
    domModule = new DomModule();
  });

  it('should create an instance', () => {
    expect(domModule).toBeTruthy();
  });
});
