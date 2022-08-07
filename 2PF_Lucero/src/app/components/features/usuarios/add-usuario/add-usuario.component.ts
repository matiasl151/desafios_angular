import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { User } from 'src/app/interfaces/users.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss'],
})
export class AddUsuarioComponent implements OnInit {
  formularioAdd: FormGroup;
  roles: string[] = ['admin', 'user'];
  constructor(
    private fb: FormBuilder,
    private _usuariosService: UsuariosService,
    private _authService: AuthService
  ) {
    this.formularioAdd = this.fb.group({
      id: [0],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formularioAdd.reset();
  }

  addUsuario() {
    const usuario: User = {
      id: this._usuariosService.getLastId(),
      username: this.formularioAdd.value.username,
      email: this.formularioAdd.value.email,
      password: this.formularioAdd.value.password,
      role: this.formularioAdd.value.role,
    };
    this._usuariosService.addUsuario(usuario).subscribe(() => {
      this.formularioAdd.reset();
    });
  }
}
