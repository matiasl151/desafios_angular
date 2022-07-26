import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';
import { Inscripcion } from 'src/app/interfaces/inscripcion.interface';

@Component({
  selector: 'app-details-inscripciones',
  templateUrl: './details-inscripciones.component.html',
  styleUrls: ['./details-inscripciones.component.scss'],
})
export class DetailsInscripcionesComponent implements OnInit, OnDestroy {
  id!: number;
  inscripcion!: Inscripcion;
  subscription!: Subscription;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _inscripcionesService: InscripcionesService
  ) {}

  ngOnInit(): void {
    this.subscription = this._activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      this.inscripcion = this._inscripcionesService.getInscripcion(this.id);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
