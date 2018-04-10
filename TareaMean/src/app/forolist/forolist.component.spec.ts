import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForolistComponent } from './forolist.component';

describe('ForolistComponent', () => {
  let component: ForolistComponent;
  let fixture: ComponentFixture<ForolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
