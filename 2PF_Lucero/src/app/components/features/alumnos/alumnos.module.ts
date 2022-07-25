import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { DetailsAlumnosComponent } from './details-alumnos/details-alumnos.component';
import { AddAlumnosComponent } from './add-alumnos/add-alumnos.component';
import { EditAlumnosComponent } from './edit-alumnos/edit-alumnos.component';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListAlumnosComponent,
    DetailsAlumnosComponent,
    AddAlumnosComponent,
    EditAlumnosComponent,
  ],
  imports: [CommonModule, AlumnosRoutingModule, SharedModule],
})
export class AlumnosModule {}
