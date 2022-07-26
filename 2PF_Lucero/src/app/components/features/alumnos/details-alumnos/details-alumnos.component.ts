import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { Curso } from 'src/app/interfaces/curso.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';
import { CursosService } from 'src/app/services/cursos/cursos.service';

@Component({
  selector: 'app-details-alumnos',
  templateUrl: './details-alumnos.component.html',
  styleUrls: ['./details-alumnos.component.scss'],
})
export class DetailsAlumnosComponent implements OnInit, OnDestroy {
  id!: number;
  subscription!: Subscription;
  alumno!: Alumno | null;
  cursosAlumno: Curso[] = [];
  constructor(
    private _alumnosService: AlumnosService,
    private _activatedRoute: ActivatedRoute,
    private _cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.subscription = this._activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      this.alumno! = this._alumnosService.getAlumno(this.id);
    });
    this.cursosAlumno = this._cursosService.getCursosAlumno(this.alumno!);
  }

  borrarCurso(curso: Curso): void {
    this._cursosService.deleteAlumnoFromCurso(curso, this.alumno!.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
