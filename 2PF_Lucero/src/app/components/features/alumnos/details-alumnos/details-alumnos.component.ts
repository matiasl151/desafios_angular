import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumno.interface';
import { AlumnosService } from 'src/app/services/alumnos/alumnos.service';

@Component({
  selector: 'app-details-alumnos',
  templateUrl: './details-alumnos.component.html',
  styleUrls: ['./details-alumnos.component.scss'],
})
export class DetailsAlumnosComponent implements OnInit, OnDestroy {
  id!: number;
  subscription!: Subscription;
  alumno!: Alumno | null;
  constructor(
    private _alumnosService: AlumnosService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this._activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      this.alumno! = this._alumnosService.getAlumno(this.id);
      console.log(this.alumno);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
