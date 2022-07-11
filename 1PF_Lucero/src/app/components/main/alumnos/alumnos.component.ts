import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumno.interface';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  alumnos: Alumno[] = [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Perez',
      age: 20,
      email: ''
    }
  ];
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'edad', 'acciones'];
  dataSource = this.alumnos;

  constructor() { }

  ngOnInit(): void {
  }

  addAlumno(alumno: Alumno) {
    this.alumnos.push(alumno);
  }

  deleteAlumno(alumno: Alumno) {
    this.alumnos = this.alumnos.filter(a => a.id !== alumno.id);
  }

  editAlumno(alumno: Alumno) {
    this.alumnos = this.alumnos.map(a => a.id === alumno.id ? alumno : a);
  }


}
