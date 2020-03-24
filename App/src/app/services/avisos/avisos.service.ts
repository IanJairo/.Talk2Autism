import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  constructor(
    public alertController: AlertController,
    public toastCtrl: ToastController
  ) { }


  // Avisos na parte inferior
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
  
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Algo deu errado',
      message,
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }
      ]
    });
    alert.present();
  }
}

