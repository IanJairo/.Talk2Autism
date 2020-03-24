import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReqFormularioPage } from './req-formulario.page';

describe('ReqFormularioPage', () => {
  let component: ReqFormularioPage;
  let fixture: ComponentFixture<ReqFormularioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqFormularioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReqFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
