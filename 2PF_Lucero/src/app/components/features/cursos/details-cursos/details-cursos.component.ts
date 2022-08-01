import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { Curso } from 'src/app/interfaces/curso.interface';

import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';

@Component({
  selector: 'app-details-cursos',
  templateUrl: './details-cursos.component.html',
  styleUrls: ['./details-cursos.component.scss'],
})
export class DetailsCursosComponent implements OnInit, OnDestroy {
  id!: number;
  subscription!: Subscription;
  curso: Curso = {} as Curso;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _cursosService: CursosService,
    private _inscripcionesService: InscripcionesService
  ) {}

  ngOnInit(): void {
    this.subscription = this._activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
    });
    this._cursosService.getCurso(this.id).subscribe(curso => {
      this.curso = curso;
    });
    this._inscripcionesService.getInscripciones().subscribe(inscripciones => {
      inscripciones.forEach(inscripcion => {
        if (inscripcion.curso.id === this.id) {
          this.curso.alumnos.push(inscripcion.alumno);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  borrarAlumno(id: number) {
    this._inscripcionesService.deleteInscripcionByAlumno(id);
    this.curso.alumnos = this.curso.alumnos.filter(alumno => alumno.id !== id);
  }
}
