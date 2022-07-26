import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInscripcionesComponent } from './details-inscripciones.component';

describe('DetailsInscripcionesComponent', () => {
  let component: DetailsInscripcionesComponent;
  let fixture: ComponentFixture<DetailsInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsInscripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
