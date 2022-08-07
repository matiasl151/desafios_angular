import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  getUsuario(id: number): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`);
  }

  addUsuario(usuario: User): Observable<User> {
    return this.http.post<User>('/api/users', usuario);
  }

  editUsuario(idUsuario: number, usuario: User): Observable<User> {
    return this.http.put<User>(`/api/users/${idUsuario}`, usuario);
  }

  deleteUsuario(id: number): Observable<User> {
    return this.http.delete<User>(`/api/users/${id}`);
  }

  getLastId(): number {
    let lastId: number = 0;
    this.getUsuarios().subscribe(usuariosDB => {
      lastId = usuariosDB[usuariosDB.length - 1].id;
    });
    return lastId;
  }
}
