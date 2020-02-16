import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit {
  constructor(
    public login: LoginService) {

  }

  // Sai do usuário logado
  sair() {
    this.login.sair('Realmente deseja sair?');
  }

  ngOnInit() {
  }

}
