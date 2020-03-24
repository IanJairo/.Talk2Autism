import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvMensagemPage } from './env-mensagem.page';

const routes: Routes = [
  {
    path: '',
    component: EnvMensagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnvMensagemPageRoutingModule {}
