import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from 'src/app/interfaces/users.interface';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-details-usuarios',
  templateUrl: './details-usuarios.component.html',
  styleUrls: ['./details-usuarios.component.scss'],
})
export class DetailsUsuariosComponent implements OnInit, OnDestroy {
  id!: number;
  subscription!: Subscription;
  user!: User;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.subscription = this._activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id')!;
      this._usuariosService.getUsuario(this.id).subscribe((user: User) => {
        this.user = user;
      });
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
