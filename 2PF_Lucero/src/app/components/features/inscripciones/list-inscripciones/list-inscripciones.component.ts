import { Component, OnInit } from '@angular/core';
import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';
import { Inscripcion } from 'src/app/interfaces/inscripcion.interface';

@Component({
  selector: 'app-list-inscripciones',
  templateUrl: './list-inscripciones.component.html',
  styleUrls: ['./list-inscripciones.component.scss'],
})
export class ListInscripcionesComponent implements OnInit {
  inscripciones: Inscripcion[] = [];
  constructor(private _inscripcionesService: InscripcionesService) {}

  ngOnInit(): void {
    this.inscripciones = this._inscripcionesService.getInscripciones();
  }

  onDelete(id: number) {
    this._inscripcionesService.deleteInscripcion(id);
  }
}
