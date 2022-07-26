import { Injectable } from '@angular/core';
import { AlumnosService } from '../alumnos/alumnos.service';
import { Alumno } from '../../interfaces/alumno.interface';
import { CursosService } from '../cursos/cursos.service';
import { Curso } from '../../interfaces/curso.interface';
import { Inscripcion } from '../../interfaces/inscripcion.interface';

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  inscripciones: Inscripcion[] = [
    {
      id: 1,
      alumno: {
        id: 1,
        name: 'Juan',
        lastName: 'Perez',
        age: 20,
        email: '',
      },
      curso: {
        id: 1,
        name: 'Angular',
        description: 'Curso de Angular',
        alumnos: [],
      },
      fecha: new Date(),
    },
  ];

  constructor(
    private _alumnosService: AlumnosService,
    private _cursosService: CursosService
  ) {}

  getInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  getInscripcion(id: number) {
    return this.inscripciones.find(inscripcion => inscripcion.id === id);
  }

  addInscripcion(alumnoId: number, cursoId: number): void {
    const alumno = this._alumnosService.getAlumno(alumnoId);
    const curso = this._cursosService.getCurso(cursoId);
    const inscripcion: Inscripcion = {
      id: this.inscripciones.length + 1,
      alumno,
      curso,
      fecha: new Date(),
    };
    this.inscripciones.push(inscripcion);
    this._cursosService.addAlumno(cursoId, alumno);
  }

  updateInscripcion(inscripcion: Inscripcion): void {
    const index = this.inscripciones.findIndex(
      inscripcionDB => inscripcionDB.id === inscripcion.id
    );
    this.inscripciones[index] = inscripcion;
  }

  deleteInscripcion(id: number): void {
    // Eliminar inscripcion, eliminar alumno del curso
    let inscripcionEncontrada = this.inscripciones.find(
      inscripcion => inscripcion.id === id
    );
    if (inscripcionEncontrada) {
      const index = this.inscripciones.findIndex(
        inscripcionDB => inscripcionDB.id === id
      );
      this._cursosService.deleteAlumnoFromCurso(
        inscripcionEncontrada.curso,
        inscripcionEncontrada.alumno.id
      );
      this.inscripciones.splice(index, 1);
    }
  }

  getInscripcionesByAlumno(alumnoId: number): Inscripcion[] {
    return this.inscripciones.filter(
      inscripcion => inscripcion.alumno.id === alumnoId
    );
  }

  getInscripcionesByCurso(cursoId: number): Inscripcion[] {
    return this.inscripciones.filter(
      inscripcion => inscripcion.curso.id === cursoId
    );
  }

  getInscripcionesByAlumnoAndCurso(
    alumnoId: number,
    cursoId: number
  ): Inscripcion[] {
    return this.inscripciones.filter(
      inscripcion =>
        inscripcion.alumno.id === alumnoId && inscripcion.curso.id === cursoId
    );
  }
}
