import { Component } from '@angular/core';
import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  usuarios: Usuario[] = [
    {
      name: 'Juan',
      email: 'juan@example.com',
      age: 18,
    },
    {
      name: 'Pedro',
      email: 'pedro@example.com',
      age: 17,
    },
  ];

  constructor() {}

  newUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }
  dataAccept(usuario: Usuario) {
    if (usuario.age >= 18) {
      alert('Este usuario es mayor de edad');
    } else {
      alert('Este usuario es menor de edad');
    }
  }
}
