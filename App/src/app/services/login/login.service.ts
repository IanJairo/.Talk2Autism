import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, AlertController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AvisosService } from '../avisos/avisos.service';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public tipoUsuario: string;
  public usuario: any;
  loading: HTMLIonLoadingElement;



  constructor(
    public db: AngularFirestore,
    public fAuth: AngularFireAuth,
    public loadingController: LoadingController,
    public alertController: AlertController,
    public router: Router,
    public avisos: AvisosService) {

  }

  async login(email, senha) {

    // Loading em espera
    await this.presentLoading();
    // Se tudo certo, entra
    try {
      this.tipoUsuario = '';
      await this.fAuth.auth.signInWithEmailAndPassword(email, senha);
      this.usuario = this.db.collection('indice').doc(email);
      const currentUser = firebase.auth().currentUser;
      this.db.collection('indice').doc(currentUser.email).get().toPromise()
        .then(doc => {
          if (!doc.exists) {
            this.tipoUsuario = 'No such document!';
          } else {
            this.tipoUsuario = doc.data().tipo;
            console.log('Document data:', doc.data(), this.tipoUsuario);
            if (this.tipoUsuario === 'pai') {
              this.router.navigate(['/tabs']);
              console.log('tipo de usuário: ', this.tipoUsuario)
            }
            if (this.tipoUsuario === 'terapeuta') {
              this.router.navigate(['/tabs2']);
              console.log('tipo de usuário: ', this.tipoUsuario)
            }
            if (this.tipoUsuario === 'adm') {
              this.router.navigate(['/tabs3']);
              console.log('tipo de usuário: ', this.tipoUsuario)
            }
          }
        })
        .catch(err => {
          this.tipoUsuario = 'Error getting document' + err;
        });


      // Senha ou email errado
    } catch (err) {

      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        console.log('User not found');
        this.loading.dismiss();
        this.avisos.presentToast('Email ou senha invalido!');
      }
      // Finaliza loading
    } finally {
      this.loading.dismiss();

    }
  }

  async opSair() {
    console.log('Saiu!');
    await this.fAuth.auth.signOut();
    this.router.navigate(['/']);


  }

  // Função que chama um alert
  async sairConta() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Realmente quer sair?',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Sair',
          handler: async () => {
            this.sair();
          }
        }
      ]
    });
    await alert.present();
  }





  async presentLoading() {
    this.loading = await this.loadingController.create({ message: 'Aguarde...' });
    return this.loading.present();
  }
}
