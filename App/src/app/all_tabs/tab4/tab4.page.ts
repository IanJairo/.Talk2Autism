import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AvisosService } from 'src/app/services/avisos/avisos.service';
import { DetalhesEventosPage } from 'src/app/detalhes-eventos/detalhes-eventos.page';
import { NovosEventosPage } from 'src/app/novos-eventos/novos-eventos.page';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  eventos: Observable<any[]>; // Só declaração de uma lista de variáveis
  public tipoUsuario;

  public banco;

  constructor(
    public db: AngularFirestore, // Confira App.components.ts
    public modalCtrl: ModalController,
    public fAuth: AngularFireAuth,
    public actionSheetController: ActionSheetController,
    public login: LoginService,
    public alertas: AvisosService,
    private alertController: AlertController

  ) {
    //Retorna  o tipo de usuário que está logado
    this.tipoUsuario = this.login.tipoUsuario

    const currentUser = firebase.auth().currentUser; // Consegue o ID do usuário logago
    this.eventos = this.db.collection('eventos').valueChanges(); // consegue os valores da coelção noticias
  }

  //Esta função é somente para a visão do Coordenadores
  async presentActionSheet(evento) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Excluir evento',
        icon: 'trash',
        cssClass: 'vermelho',
        handler: () => {
          this.excluir(evento);
          console.log('Tirar foto clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  //Esta função é somente para a visão do Coordenadores
  async excluir(evento) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Realmente deseja excluir?',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Excluir',
          handler: async () => {
            // Compara o evento selecionado com o que está no banco e o apaga do Firebase
            this.db.collection("eventos", ref => ref.where('nomeEvento', '==', evento.nomeEvento)).get().toPromise()
              .then(snapshot => {
                snapshot.forEach(doc => {
                  this.db.collection('eventos').doc(doc.id).delete();
                })
              });

            this.alertas.presentToast('Excluido com sucesso');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentModal(item, tipo) {
    if (tipo == 'adm') {
      const modal = await this.modalCtrl.create({
        component: NovosEventosPage,
        componentProps: {
          item
        }
      });
      return await modal.present();
    }
    else {

      const modal = await this.modalCtrl.create({
        component: DetalhesEventosPage,
        componentProps: {
          item
        }
      });
      return await modal.present();


    }
  }


  // Sai do usuário logado
  sair() {
    this.login.sair();

  }


  ngOnInit() {
  }

}
