import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  constructor(private http: HttpClient) {}

  addAlumno(alumno: Alumno): Observable<any> {
    return this.http.post('/api/alumnos', alumno);
  }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>('/api/alumnos');
  }

  getAlumno(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`/api/alumnos/${id}`);
  }

  updateAlumno(id: number, alumno: Alumno): Observable<any> {
    let alumnoEncontrado!: Alumno;
    this.getAlumno(id).subscribe(a => {
      alumnoEncontrado = a;
    });
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

    return this.http.put(`/api/alumnos/${id}`, alumnoEncontrado);
  }

  deleteAlumno(id: number): Observable<any> {
    return this.http.delete(`/api/alumnos/${id}`);
  }

  getLastId(): number {
    let id = 0;
    this.getAlumnos().subscribe(alumnos => {
      id = alumnos[alumnos.length - 1].id;
    });
    return id;
  }
}
