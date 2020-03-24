import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReqFormularioPageRoutingModule } from './req-formulario-routing.module';

import { ReqFormularioPage } from './req-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReqFormularioPageRoutingModule
  ],
  declarations: []
})
export class ReqFormularioPageModule {}
