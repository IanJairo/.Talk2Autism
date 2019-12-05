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
}
