import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AddInscripcionesComponent } from './add-inscripciones/add-inscripciones.component';
import { DetailsInscripcionesComponent } from './details-inscripciones/details-inscripciones.component';
import { EditInscripcionesComponent } from './edit-inscripciones/edit-inscripciones.component';
import { InscripcionesComponent } from './inscripciones.component';
import { ListInscripcionesComponent } from './list-inscripciones/list-inscripciones.component';

const routes: Route[] = [
  {
    path: '',
    component: InscripcionesComponent,
    children: [
      { path: '', redirectTo: 'list-inscripciones', pathMatch: 'full' },
      { path: 'list-inscripciones', component: ListInscripcionesComponent },
      { path: 'add-inscripcion', component: AddInscripcionesComponent },
      { path: 'edit-inscripcion/:id', component: EditInscripcionesComponent },
      {
        path: 'details-inscripcion/:id',
        component: DetailsInscripcionesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscripcionesRoutingModule {}
