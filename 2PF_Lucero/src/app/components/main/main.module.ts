import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { CursosComponent } from '../cursos/cursos.component';
import { ClasesComponent } from '../clases/clases.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListAlumnosComponent } from '../alumnos/list-alumnos/list-alumnos.component';
import { FormAlumnosComponent } from '../alumnos/form-alumnos/form-alumnos.component';

@NgModule({
  declarations: [
    MainComponent,
    AlumnosComponent,
    CursosComponent,
    ClasesComponent,
    ListAlumnosComponent,
    FormAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
