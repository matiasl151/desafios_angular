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
      fecha: [new Date(), Validators.required],
    });
  }

  ngOnInit(): void {
    this.subscription = this._activatedRoute.paramMap.subscribe(params => {
      this.inscripcion = this._inscripcionesService.getInscripcion(
        +params.get('id')!
      );
      this.formularioEdit.setValue({
        curso: this.inscripcion.curso,
        alumno: this.inscripcion.alumno,
        // TODO: arreglar asignacion de fecha
        fecha: new Date(this.inscripcion.fecha),
      });
    });

    this.cursos = this._cursosService.getCursos();
    this._alumnosService.getAlumnos().subscribe((alumnos: Alumno[]) => {
      this.alumnos = alumnos;
    });
  }

  editInscripcion() {
    let inscripcion = this.formularioEdit.value as Inscripcion;
    inscripcion.fecha = new Date(this.formularioEdit.value.fecha);

    this._inscripcionesService.updateInscripcion(
      this.inscripcion.id,
      inscripcion
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
