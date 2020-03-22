import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarNoticiaPage } from './editar-noticia.page';

describe('EditarNoticiaPage', () => {
  let component: EditarNoticiaPage;
  let fixture: ComponentFixture<EditarNoticiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNoticiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarNoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
