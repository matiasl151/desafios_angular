import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlumnosComponent } from '../../features/alumnos/alumnos.component';
import { CursosComponent } from '../../features/cursos/cursos.component';
import { InscripcionesComponent } from '../../features/inscripciones/inscripciones.component';
import { UsuariosComponent } from '../../features/usuarios/usuarios.component';
import { MainComponent } from './main.component';

import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'alumnos',
        component: AlumnosComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [AuthGuard],
      },
      { path: 'cursos', component: CursosComponent },
      { path: 'inscripciones', component: InscripcionesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
