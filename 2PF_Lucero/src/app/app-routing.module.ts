import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/core/main/main.component';
import { LoginComponent } from './components/core/login/login.component';

import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'alumnos',
        loadChildren: () =>
          import('./components/features/alumnos/alumnos.module').then(
            m => m.AlumnosModule
          ),
      },
      {
        path: 'cursos',
        loadChildren: () =>
          import('./components/features/cursos/cursos.module').then(
            m => m.CursosModule
          ),
      },
      {
        path: 'inscripciones',
        loadChildren: () =>
          import(
            './components/features/inscripciones/inscripciones.module'
          ).then(m => m.InscripcionesModule),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./components/features/usuarios/usuarios.module').then(
            m => m.UsuariosModule
          ),
      },
    ],
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
