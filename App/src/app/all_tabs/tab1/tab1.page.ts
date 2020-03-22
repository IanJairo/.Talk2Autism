import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AlertController, ModalController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { EditarNoticiaPage } from 'src/app/editar-noticia/editar-noticia.page';
import { NovaNoticiaPage } from 'src/app/nova-noticia/nova-noticia.page';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  tipoUsuario: string;

  //Só declaração de uma lista de variáveis
  noticias: Observable<any[]>;


  constructor(
    public login: LoginService,
    private modalController: ModalController,
    public db: AngularFirestore,
    public alertController: AlertController) {
    // Retorna o Nome de Usuário
    this.tipoUsuario = this.login.tipoUsuario;
    //consegue os valores da coelção noticias
    this.noticias = db.collection('noticias').valueChanges();
  }


  //Função que chama um alert para mostrar mais opções para cada noticia
  async maisOpcoes(mensagem) {

    const adm = await this.alertController.create({
      header: mensagem.titulo,
      message: mensagem.descricao,
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Editar',
          handler: async () => {
            this.editarNoticia(mensagem);
          }
        }
      ]
    });


    await adm.present();

  }


  // FUnção para editar a noticia 
  async editarNoticia(item: any) {
    const modal = await this.modalController.create({
      component: EditarNoticiaPage,
      componentProps: {
        item
      }
    });
    return await modal.present();
  }

  // Função para criar uma noticia

  async novaNoticia() {
    const modal = await this.modalController.create({
      component: NovaNoticiaPage,
      componentProps: {

      }
    });
    return await modal.present();
  }


  // Sai do usuário logado
  sair() {
    this.login.sair();
  }

  ngOnInit() {
    console.log(this.tipoUsuario);
  }

}
