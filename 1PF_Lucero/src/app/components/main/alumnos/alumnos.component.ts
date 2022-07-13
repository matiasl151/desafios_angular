import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Alumno } from 'src/app/interfaces/alumno.interface';

import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  listAlumnos: Alumno[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'email'];
  dataSource!: MatTableDataSource<Alumno>;
  constructor( private alumnoService: AlumnoService ) { }

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos() {
    this.listAlumnos = this.alumnoService.getAlumnos();
    this.dataSource = new MatTableDataSource<Alumno>(this.listAlumnos);
  }

}
