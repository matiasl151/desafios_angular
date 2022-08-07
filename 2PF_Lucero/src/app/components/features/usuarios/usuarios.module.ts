import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { DetailsUsuariosComponent } from './details-usuarios/details-usuarios.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditUsuariosComponent } from './edit-usuarios/edit-usuarios.component';

@NgModule({
  declarations: [
    ListUsuariosComponent,
    AddUsuarioComponent,
    DetailsUsuariosComponent,
    EditUsuariosComponent,
  ],
  imports: [CommonModule, UsuarioRoutingModule, SharedModule],
})
export class UsuariosModule {}
