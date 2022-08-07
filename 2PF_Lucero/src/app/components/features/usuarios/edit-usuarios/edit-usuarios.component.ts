import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/users.interface';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-usuarios',
  templateUrl: './edit-usuarios.component.html',
  styleUrls: ['./edit-usuarios.component.scss'],
})
export class EditUsuariosComponent implements OnInit {
  user!: User;
  id!: number;
  subscription!: Subscription;
  roles: string[] = ['admin', 'user'];
  public formularioEdit: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _usuariosService: UsuariosService
  ) {
    this.formularioEdit = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.subscription = this._activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this._usuariosService.getUsuario(this.id).subscribe((user: User) => {
      this.user = user;
      this.formularioEdit.setValue({
        username: this.user.username,
        email: this.user.email,
        password: this.user.password,
        role: this.user.role,
      });
    });
  }

  editUsuario() {
    const user = this.formularioEdit.value as User;
    this._usuariosService.editUsuario(this.id, user).subscribe(() => {
      this._usuariosService.getUsuario(this.id).subscribe((user: User) => {
        this.user = user;
      });
    });
  }
}
