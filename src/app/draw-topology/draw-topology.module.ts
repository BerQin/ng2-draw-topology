import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrawTopologyComponent } from './draw-topology/draw-topology.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DrawTopologyComponent,
  ],
  exports: [
    DrawTopologyComponent,
  ]
})

export class DrawTopologyModule {}
