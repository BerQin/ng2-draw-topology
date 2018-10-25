import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[DrawTopology]'
})
export class DrawTopologyDirective {

  public canvas: Element;

  constructor(
    private el: ElementRef
  ) {
    this.initUi();
  }

  private initUi() {
    this.canvas = document.createElement('canvas');
    this.el.nativeElement.appendChild(this.canvas);
  }
}
