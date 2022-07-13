import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/interfaces/alumno.interface';

import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  alumnos: Alumno[] = [];

  // TODO: Fix angular material table
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'email'];
  dataSource = this.getAlumnos();

  constructor( private alumnoService: AlumnoService ) {
    this.alumnos = this.getAlumnos();
  }

  ngOnInit(): void {
    // this.alumnos = this.getAlumnos();
  }

  getAlumnos(): Alumno[] {
    this.alumnoService.getAlumnos().subscribe(
      (data: Alumno[]) => {
        this.alumnos = data;
      }
    );
    return this.alumnos;
  }
}
