import { NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormUsuariosComponent } from './form-usuarios/form-usuarios.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [AppComponent, FormUsuariosComponent, UsuarioComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
