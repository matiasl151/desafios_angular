import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos/cursos.service';

import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.scss'],
})
export class ListCursosComponent implements OnInit {
  cursos: Curso[] = [];
  rolActivo: string = '';

  constructor(
    private _cursosService: CursosService,
    private _inscripcionesService: InscripcionesService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._cursosService.getCursos().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    });
    this.rolActivo = this._authService.getRole();
  }

  onDelete(id: number) {
    this._cursosService.deleteCurso(id).subscribe(() => {
      this._cursosService.getCursos().subscribe((cursos: Curso[]) => {
        this.cursos = cursos;
      });
    });
    this._inscripcionesService.deleteInscripcionesByCurso(id);
  }
}
