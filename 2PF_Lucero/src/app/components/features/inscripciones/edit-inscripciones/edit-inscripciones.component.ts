import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Inscripcion } from 'src/app/interfaces/inscripcion.interface';
import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';

import { CursosService } from 'src/app/services/cursos/cursos.service';
import { Curso } from 'src/app/interfaces/curso.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { Alumno } from 'src/app/interfaces/alumno.interface';

@Component({
  selector: 'app-edit-inscripciones',
  templateUrl: './edit-inscripciones.component.html',
  styleUrls: ['./edit-inscripciones.component.scss'],
})
export class EditInscripcionesComponent implements OnInit, OnDestroy {
  cursos: Curso[] = [];
  alumnos: Alumno[] = [];
  id: number = 0;
  inscripcion!: Inscripcion;
  subscription!: Subscription;
  formularioEdit: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _inscripcionesService: InscripcionesService,
    private _cursosService: CursosService,
    private _alumnosService: AlumnosService
  ) {
    this.formularioEdit = this.fb.group({
      curso: ['', Validators.required],
      alumno: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.subscription = this._activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this._inscripcionesService
      .getInscripcion(this.id)
      .subscribe((inscripcion: Inscripcion) => {
        this.inscripcion = inscripcion;
        this.formularioEdit.setValue({
          curso: this.inscripcion.curso.name,
          alumno:
            this.inscripcion.alumno.name +
            ' ' +
            this.inscripcion.alumno.lastName,
        });
      });

    this._cursosService.getCursos().subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    });
    this._alumnosService.getAlumnos().subscribe((alumnos: Alumno[]) => {
      this.alumnos = alumnos;
    });
  }

  editInscripcion() {
    let inscripcion: Inscripcion = {
      id: this.inscripcion.id,
      curso: this.formularioEdit.value.curso,
      alumno: this.formularioEdit.value.alumno,
    };
    this._inscripcionesService
      .updateInscripcion(inscripcion.id, inscripcion)
      .subscribe(() => {
        console.log('Inscripcion editada');
        this._inscripcionesService
          .getInscripcion(this.id)
          .subscribe((inscripcion: Inscripcion) => {
            this.inscripcion = inscripcion;
          });
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
