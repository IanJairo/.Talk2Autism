import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { DetalhesInformesPage } from 'src/app/detalhes-informes/detalhes-informes.page';

@NgModule({
  entryComponents: [
    DetalhesInformesPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [
    Tab2Page,
    DetalhesInformesPage]
})
export class Tab2PageModule { }
