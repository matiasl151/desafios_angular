import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    AlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class MainModule { }
