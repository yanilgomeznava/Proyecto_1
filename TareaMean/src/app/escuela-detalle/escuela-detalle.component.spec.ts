import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscuelaDetalleComponent } from './escuela-detalle.component';

describe('EscuelaDetalleComponent', () => {
  let component: EscuelaDetalleComponent;
  let fixture: ComponentFixture<EscuelaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscuelaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscuelaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
