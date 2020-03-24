import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavParams, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-req-pedidos',
  templateUrl: './req-pedidos.page.html',
  styleUrls: ['./req-pedidos.page.scss'],
})
export class ReqPedidosPage implements OnInit {
  lista: Observable<any[]>;
  tipo: any;

  constructor(
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public db: AngularFirestore) {
    this.tipo = navParams.get('tipo');
    console.log(this.tipo);

    //Retorna os valores dos pedidos do fFirebase
    this.db.collection('requisicoes').doc(this.tipo).get().toPromise().then(doc => {
      this.lista = this.db.collection("requisicoes").doc(this.tipo).collection("pedidos").valueChanges();
      console.log(this.lista);
      this.tipo = doc.data();
      console.log(this.tipo);
    });
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
