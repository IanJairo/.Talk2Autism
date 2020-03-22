import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaNoticiaPage } from './nova-noticia.page';

const routes: Routes = [
  {
    path: '',
    component: NovaNoticiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaNoticiaPageRoutingModule {}
