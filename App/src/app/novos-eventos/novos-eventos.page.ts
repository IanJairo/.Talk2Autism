import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AvisosService } from '../services/avisos/avisos.service';

@Component({
  selector: 'app-novos-eventos',
  templateUrl: './novos-eventos.page.html',
  styleUrls: ['./novos-eventos.page.scss'],
})
export class NovosEventosPage implements OnInit {

  public nomeEvento;
  public horaInicio: Date = new Date();
  public horaTermino: Date = new Date();
  public dataEvento: Date = new Date();
  public detalheEvento;




  constructor(
    private alertController: AlertController,
    public alertas: AvisosService,
    public modalCtrl: ModalController,

    public db: AngularFirestore

  ) { }

  // Horario
  mudaIn(event) {
    this.horaInicio = new Date(event.detail.value);

  }

  mudaFin(event) {
    this.horaTermino = new Date(event.detail.value);
  }

  mudaData(event) {
    this.dataEvento = new Date(event.detail.value);

  }

  // ENNVIAR EVENTO
  subEvento() {
    if (this.nomeEvento === undefined || this.horaInicio === undefined ||
      this.dataEvento === undefined || this.horaTermino === undefined ||
      this.detalheEvento === undefined) {
      this.alertas.presentToast('Preencha os Campos');
    } else {
      this.presentAlert();
    }

  }
  //COnfirmação para enviar ao banco de dados
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Deseja criar um novo evento?',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Criar',
          handler: async () => {
            const dados = {
              nomeEvento: this.nomeEvento,
              horaInicio: this.horaInicio,
              horaTermino: this.horaTermino,
              dataEvento: this.dataEvento,
              detalheEvento: this.detalheEvento
            };
            this.db.collection('eventos').add(dados).then(doc => {
              this.alertas.presentToast('Evento criado com sucesso');

              this.dismiss();
            });
          }
        }
      ]
    });
    alert.present();
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }


  ngOnInit() {
  }

}
