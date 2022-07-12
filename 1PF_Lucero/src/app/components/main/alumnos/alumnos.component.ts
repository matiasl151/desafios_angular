import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';

import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  alumnos: Alumno[] = []

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'email'];

  constructor( private alumnoService: AlumnoService ) { }

  ngOnInit(): void {
    this.getAlumnos();

  }

  getAlumnos() {
    this.alumnoService.getAlumnos().subscribe(
      (data: Alumno[]) => {
        this.alumnos = data;
      }
    )
    console.log(this.alumnos);
  }
}
