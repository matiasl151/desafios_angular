import { Component, Input, OnInit,  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumno.interface';

import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.scss']
})
export class FormAlumnosComponent implements OnInit {
  public formularioAdd: FormGroup;
  public formularioEdit: FormGroup;
  public formularioDelete: FormGroup;

  @Input() option = '';

  constructor(private fb: FormBuilder, private alumnoService: AlumnoService) {
    this.formularioAdd = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.formularioEdit = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.formularioDelete = this.fb.group({
      id: ['', Validators.required]
    });

   }

  ngOnInit(): void {
    this.formularioAdd.reset();
    this.formularioEdit.reset();
    this.formularioDelete.reset();
  }

  addAlumno() {
    this.formularioAdd.setValue({
      id: this.alumnoService.alumnos.length + 1,
      name: this.formularioAdd.value.name,
      lastName: this.formularioAdd.value.lastName,
      age: this.formularioAdd.value.age,
      email: this.formularioAdd.value.email
    })
    const alumno = this.formularioAdd.value as Alumno;
    this.alumnoService.addAlumno(alumno);
    this.formularioAdd.reset();
  }

  editAlumno() {
    //TODO: validar que el alumno exista
    const alumno = this.formularioEdit.value as Alumno;
    this.alumnoService.updateAlumno(alumno.id, alumno);
    this.formularioEdit.reset();
  }

  deleteAlumno() {
    const id = this.formularioDelete.value.id;
    this.alumnoService.deleteAlumno(id);
    this.formularioDelete.reset();
  }
}
