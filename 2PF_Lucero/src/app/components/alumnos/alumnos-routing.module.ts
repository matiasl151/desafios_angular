import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos.component';
import { FormAlumnosComponent } from './form-alumnos/form-alumnos.component';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';

const routes: Routes = [
  //TODO: agregar estas rutas al componente alumnos
  {
    path: '',
    component: AlumnosComponent,
    children: [
      { path: '/form', component: FormAlumnosComponent },
      { path: '/list', component: ListAlumnosComponent },
    ],
  },
];
