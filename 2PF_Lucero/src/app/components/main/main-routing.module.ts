import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { ClasesComponent } from '../clases/clases.component';
import { CursosComponent } from '../cursos/cursos.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
      { path: 'alumnos', component: AlumnosComponent },
      { path: 'cursos', component: CursosComponent },
      { path: 'clases', component: ClasesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
