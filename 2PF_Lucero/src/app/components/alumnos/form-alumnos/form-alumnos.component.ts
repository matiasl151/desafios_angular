import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumno.interface';


@Component({
  selector: 'app-form-alumnos',
  templateUrl: './form-alumnos.component.html',
  styleUrls: ['./form-alumnos.component.scss']
})
export class FormAlumnosComponent implements OnInit {

  public formularioAdd: FormGroup;


  constructor(private fb: FormBuilder) {
    this.formularioAdd = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.formularioAdd.reset();
  }

  addAlumno() {
    // const alumno: Alumno = {
    //   id: this.alumnoService.listAlumnos.length + 1,
    //   name: this.formularioAdd.value.name,
    //   lastName: this.formularioAdd.value.lastName,
    //   age: this.formularioAdd.value.age,
    //   email: this.formularioAdd.value.email
    // }
    // this.alumnoService.addAlumno(alumno);
    // console.log(this.alumnoService.getAlumnos());
    // this.formularioAdd.reset();
  }
}
