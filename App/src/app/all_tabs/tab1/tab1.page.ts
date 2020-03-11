import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {
  tipoUsuario: string;

  constructor(
    public login: LoginService) {
      this.tipoUsuario = this.login.tipoUsuario;
      

  }

  // Sai do usuário logado
  sair() {
    this.login.sair();
  }

  ngOnInit() {
    console.log(this.tipoUsuario);
  }

}
