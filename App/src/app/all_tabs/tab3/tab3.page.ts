import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AvisosService } from 'src/app/services/avisos/avisos.service';
import { ReqFormularioPage } from 'src/app/req-formulario/req-formulario.page';
import { ReqPedidosPage } from 'src/app/req-pedidos/req-pedidos.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // Dados para os cards
  req: Observable<any[]>;

  banco: AngularFirestore;
  tipoUsuario: any;

  sMod: boolean;
  sFar: boolean;
  sReu: boolean;

  constructor(
    public db: AngularFirestore,
    public navCtrl: NavController,
    public login: LoginService,
    public modalCtrl: ModalController,
    public alertController: AlertController,
    public fAuth: AngularFireAuth,
    public router: Router,
    public alertas: AvisosService
  ) {
    // Retorna o Nome de Usuário
    this.tipoUsuario = this.login.tipoUsuario;
    this.req = this.db.collection('requisicoes').valueChanges();
    this.requisicoes();
  }


  envMensagem() {
    this.router.navigate(['/env-mensagem']);
  }

  async presentModal(tipo: any) {
    if (this.tipoUsuario === 'adm') {
      const modal = await this.modalCtrl.create({
        component: ReqPedidosPage,
        componentProps: {
          tipo,
        }
      });

      return await modal.present();

    } else {

      if (tipo.status === false) {
        this.alertas.presentAlert('Pedidos de ' + tipo.nome + ' não estão disponíveis no momento');
        console.log('Sem Reunião');
      } else {
        const modal = await this.modalCtrl.create({
          component: ReqFormularioPage,
          componentProps: {
            tipo,
          }
        });
        return await modal.present();
      }
    }
  }

  // Modifica os valores do Firebase
  status() {
    this.db.collection('requisicoes').doc('fardamentos').update({
      status: this.sFar,
    });

    this.db.collection('requisicoes').doc('modulos').update({
      status: this.sMod,
    });

    this.db.collection('requisicoes').doc('reunioes').update({
      status: this.sReu,
    });
  }


  // Retorna os valores do Firebase
  requisicoes() {
    this.db.collection('requisicoes').doc('modulos').get().toPromise().then(doc => {
      this.sMod = doc.data().status;
    });

    this.db.collection('requisicoes').doc('fardamentos').get().toPromise().then(doc => {
      this.sFar = doc.data().status;
    });

    this.db.collection('requisicoes').doc('reunioes').get().toPromise().then(doc => {
      this.sReu = doc.data().status;
    });
  }

  // Sai do usuário logado
  sair() {
    this.login.sair();
  }

}
