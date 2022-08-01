import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos/cursos.service';

import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.scss'],
})
export class ListCursosComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(
    private _cursosService: CursosService,
    private _inscripcionesService: InscripcionesService
  ) {}

  ngOnInit(): void {
    this._cursosService.getCursos().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    });
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
