import { Component, OnInit } from '@angular/core';
import { InscripcionesService } from 'src/app/services/inscripciones/inscripciones.service';
import { Inscripcion } from 'src/app/interfaces/inscripcion.interface';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-list-inscripciones',
  templateUrl: './list-inscripciones.component.html',
  styleUrls: ['./list-inscripciones.component.scss'],
})
export class ListInscripcionesComponent implements OnInit {
  inscripciones: Inscripcion[] = [];
  rolActivo: string = '';
  constructor(
    private _inscripcionesService: InscripcionesService,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._inscripcionesService
      .getInscripciones()
      .subscribe((inscripciones: Inscripcion[]) => {
        this.inscripciones = inscripciones;
      });
    this.rolActivo = this._authService.getRole();
  }

  onDelete(id: number) {
    this._inscripcionesService.deleteInscripcion(id).subscribe(() => {
      console.log('Inscripcion eliminada');
      this._inscripcionesService
        .getInscripciones()
        .subscribe((inscripciones: Inscripcion[]) => {
          this.inscripciones = inscripciones;
        });
    });
  }
}
