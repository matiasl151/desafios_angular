import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAlumnosComponent } from './add-alumnos/add-alumnos.component';
import { AlumnosComponent } from './alumnos.component';
import { DetailsAlumnosComponent } from './details-alumnos/details-alumnos.component';
import { EditAlumnosComponent } from './edit-alumnos/edit-alumnos.component';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnosComponent,
    children: [
      { path: 'alumnos/list', component: ListAlumnosComponent },
      { path: 'alumnos/add', component: AddAlumnosComponent },
      { path: 'alumnos/edit/:id', component: EditAlumnosComponent },
      { path: 'alumnos/details/:id', component: DetailsAlumnosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosRoutingModule {}
