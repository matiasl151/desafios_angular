import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInscripcionesComponent } from './form-inscripciones/form-inscripciones.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesRoutingModule } from './inscripciones-routing.module';

@NgModule({
  declarations: [FormInscripcionesComponent],
  imports: [CommonModule, SharedModule, InscripcionesRoutingModule],
})
export class InscripcionesModule {}
