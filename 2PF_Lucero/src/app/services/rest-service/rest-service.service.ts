import { Injectable } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  alumnos: any = [];
  constructor(private http: HttpClient) {}

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>('/api/alumnos');
  }
}
