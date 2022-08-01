import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscripcion } from '../../interfaces/inscripcion.interface';

@Injectable({
  providedIn: 'root',
})
export class InscripcionesService {
  constructor(private http: HttpClient) {}

  getInscripciones(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>('/api/inscripciones');
  }

  getInscripcion(id: number): Observable<Inscripcion> {
    return this.http.get<Inscripcion>(`/api/inscripciones/${id}`);
  }

  addInscripcion(inscripcion: Inscripcion): Observable<any> {
    return this.http.post('/api/inscripciones', inscripcion);
  }

  updateInscripcion(id: number, inscripcion: Inscripcion): Observable<any> {
    return this.http.put(`/api/inscripciones/${id}`, inscripcion);
  }

  deleteInscripcion(id: number): Observable<any> {
    return this.http.delete(`/api/inscripciones/${id}`);
  }

  // Son necesarias?
  deleteInscripcionesByAlumno(alumnoId: number): Observable<any> {
    let inscripcionesEncontradas!: Inscripcion[];
    this.getInscripciones().subscribe(inscripcionesDB => {
      inscripcionesEncontradas = inscripcionesDB;
    });
    if (inscripcionesEncontradas) {
      inscripcionesEncontradas.forEach(inscripcion => {
        if (inscripcion.alumno.id === alumnoId) {
          this.deleteInscripcion(inscripcion.id).subscribe(inscripcionesDB => {
            console.log(inscripcionesDB);
          });
        }
      });
    }
    return new Observable();
  }

  deleteInscripcionesByCurso(cursoId: number): Observable<any> {
    let inscripcionesEncontradas!: Inscripcion[];
    this.getInscripciones().subscribe(inscripcionesDB => {
      inscripcionesEncontradas = inscripcionesDB;
    });
    if (inscripcionesEncontradas) {
      inscripcionesEncontradas.forEach(inscripcion => {
        if (inscripcion.curso.id === cursoId) {
          this.deleteInscripcion(inscripcion.id);
        }
      });
    }
    return new Observable();
  }
  //

  deleteInscripcionByAlumno(alumnoId: number) {
    let idInscripcion!: number;
    this.getInscripciones().subscribe(inscripcionesDB => {
      inscripcionesDB.forEach(inscripcion => {
        if (inscripcion.alumno.id === alumnoId) {
          idInscripcion = inscripcion.id;
          this.deleteInscripcion(idInscripcion).subscribe(inscripcionesDB => {
            console.log(inscripcionesDB);
          });
        } else {
          console.log('No se encontro inscripcion');
        }
      });
    });
  }

  deleteInscripcionByCurso(cursoId: number) {
    let idInscripcion!: number;
    this.getInscripciones().subscribe(inscripcionesDB => {
      inscripcionesDB.forEach(inscripcion => {
        if (inscripcion.curso.id === cursoId) {
          idInscripcion = inscripcion.id;
          this.deleteInscripcion(idInscripcion).subscribe(inscripcionesDB => {
            console.log(inscripcionesDB);
          });
        } else {
          console.log('No se encontro inscripcion');
        }
      });
    });
  }

  getLastId(): number {
    let nextId = 0;
    this.getInscripciones().subscribe(inscripcionesDB => {
      nextId = inscripcionesDB[inscripcionesDB.length - 1].id;
    });
    return nextId;
  }
}
