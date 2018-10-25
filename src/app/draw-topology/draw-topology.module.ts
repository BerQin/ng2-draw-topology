import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawTopologyDirective } from './directive/draw-topology.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DrawTopologyDirective,
  ],
  exports: [
    DrawTopologyDirective
  ]
})

export class DrawTopologyModule {}
