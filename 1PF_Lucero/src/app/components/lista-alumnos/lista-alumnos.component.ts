import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent implements OnInit {
  @Input() alumnos: Alumno[] = [
    {
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 20,
      curso: 'Angular'
    },
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
