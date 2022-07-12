import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { ContentComponent } from './content/content.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { FormAlumnosComponent } from './form-alumnos/form-alumnos.component';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainComponent,
    ContentComponent,
    AlumnosComponent,
    FormAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MainModule { }
