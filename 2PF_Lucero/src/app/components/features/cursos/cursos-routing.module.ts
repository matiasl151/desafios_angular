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
      { path: 'list', component: ListCursosComponent },
      { path: 'add', component: AddCursosComponent },
      { path: 'edit/:id', component: EditCursosComponent },
      { path: 'details/:id', component: DetailsCursosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
