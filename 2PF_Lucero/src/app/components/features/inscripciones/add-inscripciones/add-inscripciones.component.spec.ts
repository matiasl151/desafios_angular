import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInscripcionesComponent } from './add-inscripciones.component';

describe('AddInscripcionesComponent', () => {
  let component: AddInscripcionesComponent;
  let fixture: ComponentFixture<AddInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInscripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
