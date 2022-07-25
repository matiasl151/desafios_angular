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
      { path: 'list', component: ListAlumnosComponent },
      { path: 'add', component: AddAlumnosComponent },
      { path: 'edit/:id', component: EditAlumnosComponent },
      { path: 'details/:id', component: DetailsAlumnosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosRoutingModule {}
