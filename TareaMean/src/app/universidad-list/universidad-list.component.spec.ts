import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversidadListComponent } from './universidad-list.component';

describe('UniversidadListComponent', () => {
  let component: UniversidadListComponent;
  let fixture: ComponentFixture<UniversidadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversidadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversidadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
