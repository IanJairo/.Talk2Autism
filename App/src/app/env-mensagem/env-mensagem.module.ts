import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnvMensagemPageRoutingModule } from './env-mensagem-routing.module';

import { EnvMensagemPage } from './env-mensagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnvMensagemPageRoutingModule
  ],
  declarations: [EnvMensagemPage]
})
export class EnvMensagemPageModule {}
