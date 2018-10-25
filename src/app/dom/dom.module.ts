import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomComponent } from './dom/dom.component';

import { DomRoutingModule } from './dom.routing';
import { DrawTopologyModule } from '../draw-topology/draw-topology.module';

@NgModule({
  imports: [
    CommonModule,
    DomRoutingModule,
    DrawTopologyModule,
  ],
  declarations: [DomComponent]
})
export class DomModule { }
