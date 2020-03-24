import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReqPedidosPageRoutingModule } from './req-pedidos-routing.module';

import { ReqPedidosPage } from './req-pedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReqPedidosPageRoutingModule
  ],
  declarations: []
})
export class ReqPedidosPageModule {}
