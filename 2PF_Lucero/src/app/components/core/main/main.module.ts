import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Features
import { MainComponent } from './main.component';
import { AlumnosComponent } from '../../features/alumnos/alumnos.component';
import { CursosComponent } from '../../features/cursos/cursos.component';
import { InscripcionesComponent } from '../../features/inscripciones/inscripciones.component';
import { AlumnosModule } from '../../features/alumnos/alumnos.module';
import { CursosModule } from '../../features/cursos/cursos.module';
import { InscripcionesModule } from '../../features/inscripciones/inscripciones.module';
import { UsuariosModule } from '../../features/usuarios/usuarios.module';
import { UsuariosComponent } from '../../features/usuarios/usuarios.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    AlumnosComponent,
    CursosComponent,
    InscripcionesComponent,
    UsuariosComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    ReactiveFormsModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule,
    UsuariosModule,
  ],
})
export class MainModule {}
