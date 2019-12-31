import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public login: LoginService) {

  }

  // Sai do usuário logado
  sair() {
    this.login.sair('Realmente deseja sair?');
  }

}
