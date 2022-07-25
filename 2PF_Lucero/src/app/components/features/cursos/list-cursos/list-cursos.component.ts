import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso.interface';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-list-cursos',
  templateUrl: './list-cursos.component.html',
  styleUrls: ['./list-cursos.component.scss'],
})
export class ListCursosComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private _cursosService: CursosService) {
    this.cursos = this._cursosService.getCursos();
  }

  ngOnInit(): void {
    console.log('ListCursosComponent');
  }
}
