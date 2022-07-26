import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListInscripcionesComponent } from './list-inscripciones/list-inscripciones.component';
import { AddInscripcionesComponent } from './add-inscripciones/add-inscripciones.component';
import { EditInscripcionesComponent } from './edit-inscripciones/edit-inscripciones.component';
import { DetailsInscripcionesComponent } from './details-inscripciones/details-inscripciones.component';

@NgModule({
  declarations: [
    ListInscripcionesComponent,
    AddInscripcionesComponent,
    EditInscripcionesComponent,
    DetailsInscripcionesComponent,
  ],
  imports: [CommonModule, SharedModule, InscripcionesRoutingModule],
})
export class InscripcionesModule {}
