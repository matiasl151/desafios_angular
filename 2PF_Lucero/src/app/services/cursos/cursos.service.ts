import { Injectable } from '@angular/core';
import { Curso } from '../../interfaces/curso.interface';
import { Alumno } from '../../interfaces/alumno.interface';
import { AlumnosService } from '../alumnos/alumnos.service';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  cursos: Curso[] = [
    {
      id: 1,
      name: 'Angular',
      description: 'Curso de Angular',
      alumnos: [],
    },
    {
      id: 2,
      name: 'JavaScript',
      description: 'Curso de JavaScript',
      alumnos: [],
    },
    {
      id: 3,
      name: 'TypeScript',
      description: 'Curso de TypeScript',
      alumnos: [],
    },
  ];

  constructor(private _alumnosService: AlumnosService) {}

  getCursos(): Curso[] {
    // Devuelve el array de cursos
    return this.cursos;
  }

  getCurso(id: number): Curso {
    // Devuelve un curso en base al id
    let cursoEncontrado: Curso = {} as Curso;
    this.cursos.forEach(curso => {
      if (curso.id === id) {
        cursoEncontrado = curso;
      }
    });
    return cursoEncontrado;
  }

  addCurso(curso: Curso): void {
    // Agrega un curso al array de cursos
    this.cursos.push(curso);
  }

  updateCurso(id: number, curso: Curso): void {
    // Actualiza un curso
    let cursoEncontrado: Curso = this.getCurso(id);
    if (curso.name) {
      cursoEncontrado.name = curso.name;
    }

    if (curso.description) {
      cursoEncontrado.description = curso.description;
    }
  }

  deleteCurso(id: number): void {
    // Elimina un curso
    let cursoEncontrado: Curso = this.getCurso(id);
    let index = this.cursos.indexOf(cursoEncontrado);
    this.cursos.splice(index, 1);
  }

  addAlumno(id: number, alumno: Alumno): void {
    // Agrega un alumno al array de alumnos de un curso
    let cursoEncontrado: Curso = this.getCurso(id);
    let alumnoEncontrado: Alumno = this._alumnosService.getAlumno(alumno.id);
    if (
      alumnoEncontrado &&
      !cursoEncontrado.alumnos.includes(alumnoEncontrado)
    ) {
      cursoEncontrado.alumnos.push(alumnoEncontrado);
    }
  }

  getAlumnos(curso: Curso): Alumno[] {
    // Devuelve el array de alumnos de un curso
    let cursoEncontrado: Curso = this.getCurso(curso.id);
    return cursoEncontrado.alumnos;
  }

  getAlumno(curso: Curso, id: number): Alumno {
    // Devuelve un alumno en base al id dentro de un curso
    let cursoEncontrado: Curso = this.getCurso(curso.id);
    let alumnoEncontrado: Alumno = {} as Alumno;
    cursoEncontrado.alumnos.forEach(alumno => {
      if (alumno.id === id) {
        alumnoEncontrado = alumno;
      }
    });
    return alumnoEncontrado;
  }

  deleteAlumnoFromCurso(curso: Curso, id_alumno: number): void {
    // Elimina un alumno en base al id dentro de un curso
    let cursoEncontrado: Curso = this.getCurso(curso.id);
    let alumnoEncontrado: Alumno = this.getAlumno(curso, id_alumno);
    let index = cursoEncontrado.alumnos.indexOf(alumnoEncontrado);
    cursoEncontrado.alumnos.splice(index, 1);
  }

  getCursosAlumno(alumno: Alumno): Curso[] {
    // Devuelve el array de cursos de un alumno
    let cursosAlumno: Curso[] = [];
    this.cursos.forEach(curso => {
      curso.alumnos.forEach(alumnoCurso => {
        if (alumnoCurso.id === alumno.id) {
          cursosAlumno.push(curso);
        }
      });
    });
    return cursosAlumno;
  }
}
