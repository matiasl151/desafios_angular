import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { DetailsUsuariosComponent } from './details-usuarios/details-usuarios.component';
import { EditUsuariosComponent } from './edit-usuarios/edit-usuarios.component';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Route[] = [
  {
    path: '',
    component: UsuariosComponent,
    children: [
      {
        path: '',
        redirectTo: 'list-usuarios',
        pathMatch: 'full',
      },
      { path: 'list-usuarios', component: ListUsuariosComponent },
      { path: 'add-usuario', component: AddUsuarioComponent },
      { path: 'edit-usuario/:id', component: EditUsuariosComponent },
      {
        path: 'details-usuario/:id',
        component: DetailsUsuariosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
