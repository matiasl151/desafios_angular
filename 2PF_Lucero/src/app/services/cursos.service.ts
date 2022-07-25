import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso.interface';
import { Alumno } from '../interfaces/alumno.interface';
import { AlumnosService } from './alumnos/alumnos.service';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  cursos: Curso[] = [
    {
      id: 1,
      name: 'Angular',
      description: 'Curso de Angular',
      alumnos: [{ id: 1, name: 'Juan', lastName: 'Perez', age: 20, email: '' }],
    },
  ];

  constructor(private _alumnosService: AlumnosService) {}

  getCursos(): Curso[] {
    return this.cursos;
  }

  getCurso(id: number): Curso {
    let cursoEncontrado: Curso = {} as Curso;
    this.cursos.forEach(curso => {
      if (curso.id === id) {
        cursoEncontrado = curso;
      }
    });
    return cursoEncontrado;
  }

  addCurso(curso: Curso): void {
    this.cursos.push(curso);
  }

  updateCurso(curso: Curso): void {
    let cursoEncontrado: Curso = this.getCurso(curso.id);
    if (curso.name) {
      cursoEncontrado.name = curso.name;
    }

    if (curso.description) {
      cursoEncontrado.description = curso.description;
    }
  }

  deleteCurso(id: number): void {
    let cursoEncontrado: Curso = this.getCurso(id);
    let index = this.cursos.indexOf(cursoEncontrado);
    this.cursos.splice(index, 1);
  }

  addAlumno(curso: Curso, alumno: Alumno): void {
    let cursoEncontrado: Curso = this.getCurso(curso.id);
    let alumnoEncontrado: Alumno = this._alumnosService.getAlumno(alumno.id);
    if (alumnoEncontrado) {
      cursoEncontrado.alumnos.push(alumnoEncontrado);
    }
  }

  getAlumnos(curso: Curso): Alumno[] {
    let cursoEncontrado: Curso = this.getCurso(curso.id);
    return cursoEncontrado.alumnos;
  }

  getAlumno(curso: Curso, id: number): Alumno {
    let cursoEncontrado: Curso = this.getCurso(curso.id);
    let alumnoEncontrado: Alumno = {} as Alumno;
    cursoEncontrado.alumnos.forEach(alumno => {
      if (alumno.id === id) {
        alumnoEncontrado = alumno;
      }
    });
    return alumnoEncontrado;
  }
}
