import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { User } from 'src/app/interfaces/users.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.scss'],
})
export class ListUsuariosComponent implements OnInit {
  usuarios: User[] = [];
  rolActivo: string = '';

  constructor(
    private _usuariosService: UsuariosService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._usuariosService.getUsuarios().subscribe((usuarios: User[]) => {
      this.usuarios = usuarios;
    });
    this.rolActivo = this._authService.getRole();
  }

  deleteUsuario(id: number) {
    this._usuariosService.deleteUsuario(id).subscribe(() => {
      this._usuariosService.getUsuarios().subscribe((usuarios: User[]) => {
        this.usuarios = usuarios;
      });
    });
  }
}
