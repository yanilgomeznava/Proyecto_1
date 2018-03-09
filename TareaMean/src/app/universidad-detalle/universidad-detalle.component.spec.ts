import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadDetalleComponent } from './universidad-detalle.component';

describe('UniversidadDetalleComponent', () => {
  let component: UniversidadDetalleComponent;
  let fixture: ComponentFixture<UniversidadDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversidadDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
