import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Alumno} from '../interfaces/alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  public alumnos: Alumno[] = [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Perez',
      age: 20,
      email: 'juan@example.com'
    },
    {
      id: 2,
      name: 'Pedro',
      lastName: 'Perez',
      age: 20,
      email: 'pedro@example.com'
    },
  ];

  addAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  getAlumnos(): Observable<Alumno[]> {
    return of(this.alumnos);
  }

  getAlumno(id: number): Alumno {
    let alumnoEncontrado: Alumno = {} as Alumno;
    this.alumnos.forEach(alumno => {
      if (alumno.id === id) {
        alumnoEncontrado = alumno;
      }
    });
    return alumnoEncontrado;
  }

  updateAlumno(id: number, alumno: Alumno) {
    let alumnoEncontrado: Alumno = this.getAlumno(id);
    alumnoEncontrado.name = alumno.name;
    alumnoEncontrado.lastName = alumno.lastName;
    alumnoEncontrado.age = alumno.age;
    alumnoEncontrado.email = alumno.email;
  }

  deleteAlumno(id: number) {
    let alumnoEncontrado: Alumno = this.getAlumno(id);
    let index = this.alumnos.indexOf(alumnoEncontrado);
    this.alumnos.splice(index, 1);
  }

  constructor() { }
}
