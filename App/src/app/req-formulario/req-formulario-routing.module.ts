import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReqFormularioPage } from './req-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: ReqFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReqFormularioPageRoutingModule {}
