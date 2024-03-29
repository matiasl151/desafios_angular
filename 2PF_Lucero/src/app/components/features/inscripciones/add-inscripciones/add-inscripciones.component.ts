import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';
import { Inscripcion } from 'src/app/interfaces/inscripcion.interface';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { Curso } from 'src/app/interfaces/curso.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { Alumno } from 'src/app/interfaces/alumno.interface';

@Component({
  selector: 'app-add-inscripciones',
  templateUrl: './add-inscripciones.component.html',
  styleUrls: ['./add-inscripciones.component.scss'],
})
export class AddInscripcionesComponent implements OnInit {
  formularioAdd: FormGroup;
  cursos: Curso[] = [];
  alumnos: Alumno[] = [];
  constructor(
    private fb: FormBuilder,
    private _inscripcionesService: InscripcionesService,
    private _cursosService: CursosService,
    private _alumnosService: AlumnosService
  ) {
    this.formularioAdd = this.fb.group({
      id: [0],
      curso: ['', Validators.required],
      alumno: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this._cursosService.getCursos().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    });
    this._alumnosService.getAlumnos().subscribe((alumnos: Alumno[]) => {
      this.alumnos = alumnos;
    });
    this.formularioAdd.reset();
  }

  addInscripcion() {
    const inscripcion: Inscripcion = {
      id: this._inscripcionesService.getLastId(),
      curso: this.formularioAdd.value.curso,
      alumno: this.formularioAdd.value.alumno,
    };
    this._inscripcionesService.addInscripcion(inscripcion).subscribe(() => {
      this.formularioAdd.reset();
    });
  }
}
