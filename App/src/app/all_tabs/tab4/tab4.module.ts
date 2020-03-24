import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';
import { NovosEventosPage } from 'src/app/novos-eventos/novos-eventos.page';
import { DetalhesEventosPage } from 'src/app/detalhes-eventos/detalhes-eventos.page';

@NgModule({
  entryComponents: [
    NovosEventosPage,
    DetalhesEventosPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule
  ],
  declarations: [
    Tab4Page,
    NovosEventosPage,
    DetalhesEventosPage
  ]
})
export class Tab4PageModule { }
