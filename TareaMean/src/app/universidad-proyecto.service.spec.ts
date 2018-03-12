import { TestBed, inject } from '@angular/core/testing';

import { UniversidadProyectoService } from './universidad-proyecto.service';

describe('UniversidadProyectoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversidadProyectoService]
    });
  });

  it('should be created', inject([UniversidadProyectoService], (service: UniversidadProyectoService) => {
    expect(service).toBeTruthy();
  }));
});
