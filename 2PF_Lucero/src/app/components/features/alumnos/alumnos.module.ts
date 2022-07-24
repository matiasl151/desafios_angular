import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { FormAlumnosComponent } from './form-alumnos/form-alumnos.component';

@NgModule({
  declarations: [ListAlumnosComponent, FormAlumnosComponent],
  imports: [CommonModule],
})
export class AlumnosModule {}
