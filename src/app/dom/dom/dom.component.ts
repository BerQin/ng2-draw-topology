import { Component, OnInit } from '@angular/core';

import {
  DrawStage,
  DrawNode,
} from '../../draw-topology/class';

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss']
})
export class DomComponent implements OnInit {
  public stage: DrawStage;
  constructor() {
    this.stage = new DrawStage();
  }

  ngOnInit() {
  }

}
