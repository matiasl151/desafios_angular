import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post('/api/login', {
      email: user.email,
      password: user.password,
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getRole(): string {
    let user = localStorage.getItem('user');
    if (user !== null) {
      let userjson = JSON.parse(user);
      return userjson.user.role;
    } else {
      return '';
    }
  }

  getUser(): string {
    let user = localStorage.getItem('user');
    if (user !== null) {
      let userjson = JSON.parse(user);
      return userjson.user.username;
    } else {
      return '';
    }
  }
}
