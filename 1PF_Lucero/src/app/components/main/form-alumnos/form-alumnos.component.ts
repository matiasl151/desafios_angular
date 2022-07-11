import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumno.interface';
@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.scss']
})
export class FormAlumnosComponent implements OnInit {
  public formulario: FormGroup;
  @Output() addAlumnoEvent = new EventEmitter<Alumno>();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  addAlumno() {
    const alumno = this.formulario.value as Alumno;
    this.addAlumnoEvent.emit(alumno);
    this.formulario.reset();
  }

}
