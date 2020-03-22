import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaNoticiaPageRoutingModule } from './nova-noticia-routing.module';

import { NovaNoticiaPage } from './nova-noticia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaNoticiaPageRoutingModule
  ],
  declarations: []
})
export class NovaNoticiaPageModule {}
