import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaServicioImagenesComponent } from './prueba-servicio-imagenes.component';

describe('PruebaServicioImagenesComponent', () => {
  let component: PruebaServicioImagenesComponent;
  let fixture: ComponentFixture<PruebaServicioImagenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaServicioImagenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaServicioImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
