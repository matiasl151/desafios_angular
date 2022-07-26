import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';

import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.scss'],
})
export class ListAlumnosComponent implements OnInit {
  listAlumnos: Alumno[] = [];

  constructor(
    private _alumnosService: AlumnosService,
    private _inscripcionesService: InscripcionesService
  ) {}

  ngOnInit(): void {
    this.listAlumnos = this._alumnosService.getAlumnos();
  }

  deleteAlumno(id: number) {
    this._alumnosService.deleteAlumno(id);
    this._inscripcionesService.deleteInscripcionesByAlumno(id);
  }
}
