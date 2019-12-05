import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  senha: string;
  constructor(
    public efLogin: LoginService
  ) { }

  // Tenta fazer login
  async login() {
    this.efLogin.login(this.email, this.senha);

  }

  ngOnInit() {
  }

}
