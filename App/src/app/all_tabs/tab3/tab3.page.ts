import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(
    public login: LoginService) {

  }

  // Sai do usuário logado
  sair() {
    this.login.sair('Realmente deseja sair?');
  }

}
