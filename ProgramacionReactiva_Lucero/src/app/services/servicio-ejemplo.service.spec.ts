import { TestBed } from '@angular/core/testing';

import { ServicioEjemploService } from './servicio-ejemplo.service';

describe('ServicioEjemploService', () => {
  let service: ServicioEjemploService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEjemploService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
