import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  //mensagensRecebidas: Observable<any[]>; // Só declaração de uma lista de variáveis
  //mensagensEnviadas: Observable<any[]>; // Só declaração de uma lista de variáveis

  mensagensApresentadas: String = "recebidos";

  mensagensRecebidas = [{
    remetente: 'José@gmail.com',
    assunto: 'Teste',
    mensagem: 'Esta é uma mensagem de teste'
  },
  {
    remetente: 'José@gmail.com',
    assunto: 'Teste',
    mensagem: 'Esta é uma mensagem de teste'
  }]

  mensagensEnviadas = [{
    remetente: 'José@gmail.com',
    assunto: 'Teste',
    mensagem: 'Esta é uma mensagem de teste'
  },
  {
    remetente: 'José@gmail.com',
    assunto: 'Teste',
    mensagem: 'Esta é uma mensagem de teste'
  }]

  constructor(
    public login: LoginService) {

  }

  segmentChanged(event) {
    //console.log(event.detail.value); -> Conseguir o valor selecionado
    this.mensagensApresentadas = event.detail.value;

  }

  novaMensagem(){
    console.log("nova mensagem")
  }

  // Sai do usuário logado
  sair() {
    this.login.sair();

  }


  ngOnInit() {
  }

}
