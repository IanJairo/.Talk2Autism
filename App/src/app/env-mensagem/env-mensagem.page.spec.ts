import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnvMensagemPage } from './env-mensagem.page';

describe('EnvMensagemPage', () => {
  let component: EnvMensagemPage;
  let fixture: ComponentFixture<EnvMensagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvMensagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnvMensagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
