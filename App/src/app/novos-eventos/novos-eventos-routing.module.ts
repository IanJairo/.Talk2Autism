import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovosEventosPage } from './novos-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: NovosEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovosEventosPageRoutingModule {}
