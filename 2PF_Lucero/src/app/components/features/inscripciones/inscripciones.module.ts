import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInscripcionesComponent } from './form-inscripciones/form-inscripciones.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InscripcionesComponent } from './inscripciones.component';

@NgModule({
  declarations: [FormInscripcionesComponent],
  imports: [CommonModule, SharedModule],
})
export class InscripcionesModule {}
