import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvMensagemPageRoutingModule } from './env-mensagem-routing.module';

import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvMensagemPageRoutingModule,
    IonicSelectableModule, //Caixa de seleção pesquisável
  ],
  declarations: []
})
export class EnvMensagemPageModule {}
