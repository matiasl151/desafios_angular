import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.scss'],
})
export class FormUsuariosComponent implements OnInit {
  public formulario: FormGroup;
  @Output() addUsuario = new EventEmitter<Usuario>();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      name: ['', Validators.required, Validators.minLength(10)],
      email: ['', [Validators.required, Validators.minLength(10)]],
      age: ['', [Validators.required, Validators.min(16)]],
    });
  }

  ngOnInit(): void {}

  agregarUsuario() {
    const usuario = this.formulario.value as Usuario;
    this.addUsuario.emit(usuario);
    this.formulario.reset();
  }
}
