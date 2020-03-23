import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, NavParams } from '@ionic/angular';
import * as moment from 'moment';


@Component({
  selector: 'app-detalhes-informes',
  templateUrl: './detalhes-informes.page.html',
  styleUrls: ['./detalhes-informes.page.scss'],
})
export class DetalhesInformesPage implements OnInit {
  info: any;
  comentarios: Observable<any[]>; //Só declaração de uma lista de variáveis

  constructor(
    public db: AngularFirestore,
    private modalController: ModalController,
    public navParams: NavParams) {
    // Recebe o valor vindo do Tab2Page
    this.info = navParams.get('item');

    // Formata a data no estilo do Brasil
    let data = moment(this.info.dateAtend.toDate()).format('DD-MM-YYYY');
    // Retorna os comentários, do Firebase,  que os terapeutas fizeram
    this.comentarios = db.collection('atendidos').doc(this.info.atendido).collection('informes').doc(data).collection('comentarios').valueChanges()
  }

  async dismiss() {
    await this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
