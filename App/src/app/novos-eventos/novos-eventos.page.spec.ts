import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovosEventosPage } from './novos-eventos.page';

describe('NovosEventosPage', () => {
  let component: NovosEventosPage;
  let fixture: ComponentFixture<NovosEventosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovosEventosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovosEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
