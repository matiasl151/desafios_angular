import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/core/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
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
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
