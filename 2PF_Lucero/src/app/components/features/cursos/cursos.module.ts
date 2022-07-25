import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCursosComponent } from './list-cursos/list-cursos.component';
import { FormCursosComponent } from './form-cursos/form-cursos.component';
import { AddCursosComponent } from './add-cursos/add-cursos.component';
import { EditCursosComponent } from './edit-cursos/edit-cursos.component';
import { DetailsCursosComponent } from './details-cursos/details-cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ListCursosComponent,
    FormCursosComponent,
    AddCursosComponent,
    EditCursosComponent,
    DetailsCursosComponent,
  ],
  imports: [CommonModule, CursosRoutingModule, SharedModule],
})
export class CursosModule {}
