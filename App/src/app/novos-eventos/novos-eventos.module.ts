import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovosEventosPageRoutingModule } from './novos-eventos-routing.module';

import { NovosEventosPage } from './novos-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovosEventosPageRoutingModule
  ],
  declarations: []
})
export class NovosEventosPageModule {}
