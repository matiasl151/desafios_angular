import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  @Input() usuarios: Usuario[] = [];
  @Output() onClickUsuario = new EventEmitter<Usuario>();

  filtroEdadMin: number = 16;
  filtroEdadMax: number = 100;
  constructor() {}

  ngOnInit(): void {}

  clickUsuario(usuario: Usuario) {
    this.onClickUsuario.emit(usuario);
  }
  setFiltroEdad(min: number, max: number) {
    this.filtroEdadMin = min;
    this.filtroEdadMax = max;
  }
}
