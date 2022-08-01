import { Injectable } from '@angular/core';
import { Curso } from '../../interfaces/curso.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InscripcionesService } from '../inscripciones/inscripciones.service';

@Injectable({
  providedIn: 'root',
})
export class CursosService {
  constructor(
    private _inscripcipcionesService: InscripcionesService,
    private http: HttpClient
  ) {}

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>('/api/cursos');
  }

  getCurso(id: number): Observable<Curso> {
    return this.http.get<Curso>(`/api/cursos/${id}`);
  }

  addCurso(curso: Curso): Observable<any> {
    return this.http.post('/api/cursos', curso);
  }

  updateCurso(id: number, curso: Curso): Observable<any> {
    // Actualiza un curso
    return this.http.put(`/api/cursos/${id}`, curso);
  }

  deleteCurso(id: number): Observable<any> {
    return this.http.delete(`/api/cursos/${id}`);
  }

  getLastId(): number {
    // Devuelve el último id de los cursos
    let lastId = 0;
    this.getCursos().subscribe(cursos => {
      cursos.forEach(curso => {
        if (curso.id > lastId) {
          lastId = curso.id;
        }
      });
    });
    return lastId;
  }
}
