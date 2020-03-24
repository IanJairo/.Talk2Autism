import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes-eventos',
  templateUrl: './detalhes-eventos.page.html',
  styleUrls: ['./detalhes-eventos.page.scss'],
})
export class DetalhesEventosPage implements OnInit {
  info: any;

  constructor(
    private modalController: ModalController,
    public navParams: NavParams

  ) {
    this.info = navParams.get('item');

  }

  async dismiss() {
    await this.modalController.dismiss();
  }

  ngOnInit() {
  }


}
