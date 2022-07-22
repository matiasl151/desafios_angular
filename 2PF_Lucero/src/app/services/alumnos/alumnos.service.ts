import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  listAlumnos: Alumno[] = [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Perez',
      age: 20,
      email: '',
    },
  ];

  addAlumno(alumno: Alumno) {
    this.listAlumnos.push(alumno);
  }

  getAlumnos() {
    return this.listAlumnos;
  }

  getAlumno(id: number): Alumno {
    let alumnoEncontrado: Alumno = {} as Alumno;
    this.listAlumnos.forEach(alumno => {
      if (alumno.id === id) {
        alumnoEncontrado = alumno;
      }
    });
    return alumnoEncontrado;
  }

  updateAlumno(id: number, alumno: Alumno) {
    let alumnoEncontrado: Alumno = this.getAlumno(id);
    if (alumno.name) {
      alumnoEncontrado.name = alumno.name;
    }

    if (alumno.lastName) {
      alumnoEncontrado.lastName = alumno.lastName;
    }

    if (alumno.age) {
      alumnoEncontrado.age = alumno.age;
    }

    if (alumno.email) {
      alumnoEncontrado.email = alumno.email;
    }
  }

  deleteAlumno(id: number) {
    let alumnoEncontrado: Alumno = this.getAlumno(id);
    let index = this.listAlumnos.indexOf(alumnoEncontrado);
    this.listAlumnos.splice(index, 1);
  }

  constructor() {}
}
