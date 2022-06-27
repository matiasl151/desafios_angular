import { Component, OnInit } from '@angular/core';
import { ALUMNOS } from './mock-alumnos';
import { Alumno } from './alumno.interface';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  alumnos = ALUMNOS;
  alumnoSelected?: Alumno;
  constructor() {}

  ngOnInit(): void {}

  onSelect(alumno: Alumno): void {
    this.alumnoSelected = alumno;
  }
}
