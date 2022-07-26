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
  inscripciones: Inscripcion[] = [];

  constructor(
    private _alumnosService: AlumnosService,
    private _cursosService: CursosService
  ) {}

  getInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  getInscripcion(id: number) {
    let inscripcionEncontrada = this.inscripciones.find(
      inscripcion => inscripcion.id === id
    );
    if (inscripcionEncontrada) {
      return inscripcionEncontrada;
    } else {
      return {} as Inscripcion;
    }
  }

  addInscripcion(inscripcion: Inscripcion): void {
    // Agregar inscripcion, agregar alumno al curso
    // Validar que el alumno no esté inscripto en el curso
    const inscripcionesByAlumnoAndCurso = this.getInscripcionesByAlumnoAndCurso(
      inscripcion.alumno.id,
      inscripcion.curso.id
    );
    if (inscripcionesByAlumnoAndCurso.length === 0) {
      this.inscripciones.push(inscripcion);
      this._cursosService.addAlumno(inscripcion.curso.id, inscripcion.alumno);
    } else {
      console.error('El alumno ya está inscripto en el curso');
    }
  }

  updateInscripcion(id: number, inscripcion: Inscripcion): void {
    let inscripcionEncontrada = this.getInscripcion(id);
    if (inscripcionEncontrada) {
      if (inscripcion.alumno) {
        inscripcionEncontrada.alumno = inscripcion.alumno;
      }
      if (inscripcion.curso) {
        inscripcionEncontrada.curso = inscripcion.curso;
      }
    }
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
