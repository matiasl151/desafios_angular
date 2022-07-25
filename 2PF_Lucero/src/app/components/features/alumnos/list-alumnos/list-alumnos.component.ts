import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.scss'],
})
export class ListAlumnosComponent implements OnInit {
  listAlumnos: Alumno[] = [];

  constructor(private _alumnosService: AlumnosService) {}

  ngOnInit(): void {
    this.listAlumnos = this._alumnosService.getAlumnos();
  }

  deleteAlumno(id: number) {
    this._alumnosService.deleteAlumno(id);
  }
}
