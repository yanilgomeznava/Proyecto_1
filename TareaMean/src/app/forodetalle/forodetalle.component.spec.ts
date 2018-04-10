import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForodetalleComponent } from './forodetalle.component';

describe('ForodetalleComponent', () => {
  let component: ForodetalleComponent;
  let fixture: ComponentFixture<ForodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
