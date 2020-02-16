import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

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
