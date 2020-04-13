import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';
import { EnvMensagemPage } from 'src/app/env-mensagem/env-mensagem.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  entryComponents: [
    EnvMensagemPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [
    Tab5Page,
    EnvMensagemPage]
})
export class Tab5PageModule {}
