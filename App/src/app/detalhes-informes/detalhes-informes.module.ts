import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesInformesPageRoutingModule } from './detalhes-informes-routing.module';

import { DetalhesInformesPage } from './detalhes-informes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesInformesPageRoutingModule
  ],
  declarations: []
})
export class DetalhesInformesPageModule { }
