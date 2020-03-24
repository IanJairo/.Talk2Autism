import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReqPedidosPage } from './req-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: ReqPedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReqPedidosPageRoutingModule {}
