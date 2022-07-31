import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';

import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';
import { RestService } from 'src/app/services/rest-service/rest-service.service';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.scss'],
})
export class ListAlumnosComponent implements OnInit {
  listAlumnos: Alumno[] = [];
  listAlumnosRest: any = [];

  constructor(
    private _alumnosService: AlumnosService,
    private _inscripcionesService: InscripcionesService,
    private _restService: RestService
  ) {}

  ngOnInit(): void {
    this._alumnosService.getAlumnos().subscribe((alumnos: Alumno[]) => {
      this.listAlumnos = alumnos;
    });
    this._restService.getAlumnos().subscribe(data => {
      this.listAlumnosRest = data;
    });
  }

  deleteAlumno(id: number) {
    this._alumnosService.deleteAlumno(id).subscribe(() => {
      this._alumnosService.getAlumnos().subscribe((alumnos: Alumno[]) => {
        this.listAlumnos = alumnos;
      });
    });
    this._inscripcionesService.deleteInscripcionesByAlumno(id);
  }
}
