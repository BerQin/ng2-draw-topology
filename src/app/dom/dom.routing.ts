import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DomComponent } from './dom/dom.component';

const routes: Routes = [
  {
    path: 'Dom',
    component: DomComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DomRoutingModule {}
