import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ReqFormularioPage } from 'src/app/req-formulario/req-formulario.page';
import { ReqPedidosPage } from 'src/app/req-pedidos/req-pedidos.page';

@NgModule({
  entryComponents: [
    ReqFormularioPage,
    ReqPedidosPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [
    Tab3Page,
    ReqFormularioPage,
    ReqPedidosPage]
})
export class Tab3PageModule { }
