import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInscripcionesComponent } from './edit-inscripciones.component';

describe('EditInscripcionesComponent', () => {
  let component: EditInscripcionesComponent;
  let fixture: ComponentFixture<EditInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInscripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
