import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCursosComponent } from './list-cursos/list-cursos.component';
import { FormCursosComponent } from './form-cursos/form-cursos.component';

@NgModule({
  declarations: [ListCursosComponent, FormCursosComponent],
  imports: [CommonModule],
})
export class CursosModule {}
