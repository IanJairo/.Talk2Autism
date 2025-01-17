import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFirestoreModule } from '@angular/fire/firestore'; //O Database 
import { AngularFireStorageModule } from '@angular/fire/storage'; 
import { AngularFireAuthModule } from '@angular/fire/auth'; //Autenticação
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    IonicSelectableModule, //Caixa de seleção pesquisável
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireModule.initializeApp(environment.firebase)],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
