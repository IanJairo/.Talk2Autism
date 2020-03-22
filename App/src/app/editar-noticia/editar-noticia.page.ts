import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AvisosService } from '../services/avisos/avisos.service';

@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.page.html',
  styleUrls: ['./editar-noticia.page.scss'],
})
export class EditarNoticiaPage implements OnInit {

  public noticia;
  public postar: boolean;

  public tituloNoticia;
  public descriNoticia;
  public horaNoticia: any;
  constructor(
    public db: AngularFirestore,
    private alertas: AvisosService,
    private modalController: ModalController,
    private navParams: NavParams,
    private alertController: AlertController) {
    this.noticia = this.navParams.get('item');
    this.tituloNoticia = this.noticia.titulo;
    this.descriNoticia = this.noticia.descricao;
    this.horaNoticia = this.noticia.data;
  }

  async modifiNoticia(message: string) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message,
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Enviar',
          handler: async () => {
            const novaNoticia = {
              titulo: this.tituloNoticia,
              descricao: this.descriNoticia,
              data: this.horaNoticia,
              postar: this.postar
            };
            console.log(this.noticia.id)
            this.db.collection('noticias').doc(this.noticia.id).update(novaNoticia);
            this.dismiss();
            this.alertas.presentToast('Notícia modificada com sucesso!');

          }

        }
      ]
    });
    alert.present();
  }

  async apagarNoticia(message: string) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Continuar',
          handler: async () => {
            this.db.collection('noticias').doc(this.noticia.id).delete();
            this.dismiss();
            this.alertas.presentToast('Notícia apagada com sucesso!');
          }
        }
      ]
    });
    alert.present();
  }


  subNoticia(valor: boolean) {
    if (this.tituloNoticia === undefined || this.descriNoticia === undefined) {
      this.alertas.presentToast('Preencha os Campos');
    } else {
      console.log(this.noticia);
      this.postar = valor;
      this.modifiNoticia('Deseja enviar as modificações?');
    }
  }

  excluirNoticia() {
    this.apagarNoticia('Tem certeza que deseja excluir essa notícia? (Essa ação não poderá ser desfeita)')
  }



  // Sair da página
  async dismiss() {
    await this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
