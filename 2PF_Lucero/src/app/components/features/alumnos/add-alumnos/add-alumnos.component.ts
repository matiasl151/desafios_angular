import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';

@Component({
  selector: 'app-add-alumnos',
  templateUrl: './add-alumnos.component.html',
  styleUrls: ['./add-alumnos.component.scss'],
})
export class AddAlumnosComponent implements OnInit {
  public formularioAdd: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _alumnosService: AlumnosService
  ) {
    this.formularioAdd = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formularioAdd.reset();
  }

  addAlumno() {
    const alumno: Alumno = {
      id: this._alumnosService.getLastId(),
      name: this.formularioAdd.value.name,
      lastName: this.formularioAdd.value.lastName,
      age: this.formularioAdd.value.age,
      email: this.formularioAdd.value.email,
    };
    this._alumnosService.addAlumno(alumno).subscribe(() => {
      this.formularioAdd.reset();
    });
  }
}
