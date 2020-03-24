import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AvisosService } from '../services/avisos/avisos.service';

@Component({
  selector: 'app-req-formulario',
  templateUrl: './req-formulario.page.html',
  styleUrls: ['./req-formulario.page.scss'],
})
export class ReqFormularioPage implements OnInit {
  tipo: any;

  fardamento: any;
  reuniao: any;
  pai: any;

  sMod: boolean;
  sFar: boolean;
  sReu: boolean;


  modais: number;

  public aQnt: string;
  public tema: string;
  public elementos: string;
  public infoAd: string;
  public modulos: string;
  public motivo: string;
  public limHorario: string;
  public limData: string;
  public detalhes: string;
  public tamanho: string;
  public quantidade: string;
  public currentUser: any;

  public nomePai;
  constructor(

    public modalCtrl: ModalController,

    public db: AngularFirestore,
    public alertas: AvisosService,
    public navParams: NavParams) {
    this.currentUser = firebase.auth().currentUser;
    this.db.collection('indice').doc(this.currentUser.email).get().toPromise().then(doc => {
      this.nomePai = doc.data().nome
    })

    this.tipo = navParams.get('tipo');


    this.status();
  }


  // Enviar pedido de reunião
  subMeeting() {
    if (this.motivo !== undefined && this.limHorario !== undefined
      && this.limData !== undefined && this.detalhes !== undefined) {

      const reun = {
        motivo: this.motivo,
        limHorario: this.limHorario,
        limData: this.limData,
        detalhes: this.detalhes,
        pai: this.nomePai,
        paiEmail: this.currentUser.email
      };
      console.log(reun);
      this.db.collection("requisicoes").doc(this.tipo.id).collection("pedidos").add(
        reun).then(ref => {
          console.log(ref);
          console.log('Reunião foi pedida com ID: ', ref.id);
          this.alertas.presentToast('Pedido Realizado com Sucesso!');
          this.dismiss();
        });
    } else {
      this.alertas.presentAlert('Preencha os campos!');
    }
  }

  // Enviar pedido de Modulos
  subModules() {
    if (this.aQnt !== undefined && this.tema !== undefined
      && this.elementos !== undefined && this.infoAd !== undefined && this.modulos !== undefined) {
      const mod = {
        aQnt: this.aQnt,
        tema: this.tema,
        elementos: this.elementos,
        infoAd: this.infoAd,
        modulos: this.modulos,
        pai: this.nomePai,
        paiEmail: this.currentUser.email
      };

      console.log(mod);
      this.db.collection('requisicoes').doc(this.tipo.id).collection("pedidos").add(
        mod).then(ref => {
          console.log(ref);
          console.log('Modulos foi pedido com document with ID: ', ref.id);
          this.alertas.presentToast('Pedido Realizado com Sucesso!');
          this.dismiss();
        });
    } else {
      this.alertas.presentAlert('Preencha os campos!');
    }
  }
  // Enviar pedido de fardamento
  async subUniform() {
    if (this.tamanho !== undefined && this.quantidade !== undefined) {
      const fard = {
        tamanho: this.tamanho,
        quantidade: this.quantidade,
        pai: this.nomePai,
        paiEmail: this.currentUser.email
      };

      console.log(fard);
      this.db.collection("requisicoes").doc(this.tipo.id).collection("pedidos").add(
        fard).then(ref => {
          console.log(ref);
          console.log('Uniforme foi pedido com document with ID: ', ref.id);
          this.alertas.presentToast('Pedido Realizado com Sucesso!');
          this.dismiss();
        });
    } else {
      // MOSTRA UMA ALERTA CASO NÃO PREENCHEU OS CAMPOS
      this.alertas.presentAlert('Preencha os campos!');
    }
  }


  // Retorna os valores do Firebase
  status() {
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

  tipoRequisicao() {
    if (this.tipo.nome === 'Fardamentos') {
      this.modais = 1;
      // console.log('isso láaaaaa', this.typo);
    }

    if (this.tipo.nome === 'Módulos') {
      this.modais = 2;
      // console.log('isso láaaaaa', this.typo);
    }

    if (this.tipo.nome === 'Reuniões') {
      this.modais = 3;
      console.log(this.tipo);
      // console.log('isso láaaaaa', this.typo);
    }

    if (this.tipo.status === false && this.tipo.nome === 'Reuniões') {
      this.modais = 0;
    }
  }
  ngOnInit() {
    this.tipoRequisicao();
    this.status();

  }


  // Sair da página
  async dismiss() {
    await this.modalCtrl.dismiss();
  }

}
