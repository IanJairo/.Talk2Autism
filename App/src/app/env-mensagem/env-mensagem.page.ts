import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';


@Component({
  selector: 'app-env-mensagem',
  templateUrl: './env-mensagem.page.html',
  styleUrls: ['./env-mensagem.page.scss'],
})

export class EnvMensagemPage implements OnInit {

  ports: any[];
  port: any;

  constructor(
    public modalCtrl: ModalController,
  ) { 
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' }
    ];
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }

  ngOnInit() {
  }

  // Sair da página
  async cancelar() {
    await this.modalCtrl.dismiss();
  }

}
