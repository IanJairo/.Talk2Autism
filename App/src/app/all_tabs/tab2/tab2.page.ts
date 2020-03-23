import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { ModalController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { DetalhesInformesPage } from 'src/app/detalhes-informes/detalhes-informes.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user: any;

  // Só declaração de uma lista de variáveis
  informes: Observable<any[]>;


  constructor(
    public db: AngularFirestore,

    public fAuth: AngularFireAuth,
    public login: LoginService,
    public router: Router,
    private modalController: ModalController) {
    const currentUser = firebase.auth().currentUser; // Consegue o ID do usuário logado

    //Retorna os informes relacionados ao usuário logado
    this.user = db.collection('indice').doc(currentUser.email).get().toPromise()
      .then(doc => {
        this.user = doc.data();
        for (const filho in this.user.atendido) {
          const filhoo = this.user.atendido[filho];
          console.log('filho:', filhoo);
          this.informes = db.collection('atendidos').doc(filhoo).collection('informes', ref =>
            ref.orderBy('dateAtend', 'desc')).valueChanges();
        }
      });
  }

  // Abre o Modal para a pagina de detalhes
  async maisDetalhes(item) {
    const modal = await this.modalController.create({
      component: DetalhesInformesPage,
      componentProps: {
        item
      }
    });
    return await modal.present();
  }

  // Sai do usuário logado
  sair() {
    this.login.sair();

  }

}
