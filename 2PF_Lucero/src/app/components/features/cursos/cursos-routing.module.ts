import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCursosComponent } from './add-cursos/add-cursos.component';
import { CursosComponent } from './cursos.component';
import { DetailsCursosComponent } from './details-cursos/details-cursos.component';
import { EditCursosComponent } from './edit-cursos/edit-cursos.component';
import { ListCursosComponent } from './list-cursos/list-cursos.component';

const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'cursos/list', component: ListCursosComponent },
      { path: 'cursos/add', component: AddCursosComponent },
      { path: 'cursos/edit/:id', component: EditCursosComponent },
      { path: 'cursos/details/:id', component: DetailsCursosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
