import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

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
