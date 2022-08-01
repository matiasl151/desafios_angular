import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Alumno } from 'src/app/interfaces/alumno.interface';
import { Curso } from 'src/app/interfaces/curso.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { CursosService } from 'src/app/services/cursos/cursos.service';

import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';

@Component({
  selector: 'app-details-alumnos',
  templateUrl: './details-alumnos.component.html',
  styleUrls: ['./details-alumnos.component.scss'],
})
export class DetailsAlumnosComponent implements OnInit, OnDestroy {
  id!: number;
  subscription!: Subscription;
  alumno!: Alumno;
  cursosAlumno: Curso[] = [];
  constructor(
    private _alumnosService: AlumnosService,
    private _activatedRoute: ActivatedRoute,
    private _cursosService: CursosService,
    private _inscripcionesService: InscripcionesService
  ) {}

  ngOnInit(): void {
    this.subscription = this._activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      this._alumnosService.getAlumno(this.id).subscribe((alumno: Alumno) => {
        this.alumno = alumno;
      });
    });
    this._inscripcionesService.getInscripciones().subscribe(inscripciones => {
      inscripciones.forEach(inscripcion => {
        if (inscripcion.alumno.id === this.id) {
          this.cursosAlumno.push(inscripcion.curso);
        }
      });
    });
  }

  borrarCurso(): void {
    this._inscripcionesService.deleteInscripcionByCurso(this.id);
    this.cursosAlumno = this.cursosAlumno.filter(curso => curso.id !== this.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
