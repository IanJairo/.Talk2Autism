import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReqPedidosPage } from './req-pedidos.page';

describe('ReqPedidosPage', () => {
  let component: ReqPedidosPage;
  let fixture: ComponentFixture<ReqPedidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqPedidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReqPedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
