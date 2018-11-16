import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

import {
  DrawNode,
  DrawStage
} from '../class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'draw-topology',
  templateUrl: './draw-topology.component.html',
  styleUrls: ['./draw-topology.component.scss']
})
export class DrawTopologyComponent implements OnInit {

  @ViewChild('drawCanvas') private canvas: ElementRef;
  @Input() private stage: DrawStage;

  constructor(
    private el: ElementRef
  ) {
  }

  ngOnInit() {
    if (this.stage) {
      this.stage.setElement(this.el.nativeElement);
    }
    console.log(this.stage);
  }

}
