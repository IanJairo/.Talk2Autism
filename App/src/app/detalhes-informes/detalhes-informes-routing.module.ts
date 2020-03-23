import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesInformesPage } from './detalhes-informes.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesInformesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesInformesPageRoutingModule {}
