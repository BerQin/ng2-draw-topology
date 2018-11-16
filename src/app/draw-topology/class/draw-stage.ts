export class DrawStage {
  public canvas: Element;
  constructor() {
    this.canvas = document.createElement('canvas');
  }

  public setElement(el: Element) {
    this.canvas = el;
  }

  public setTheme() {
  }
}
