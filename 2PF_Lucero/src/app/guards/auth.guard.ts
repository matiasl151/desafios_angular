import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _snackbar: MatSnackBar) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.hasPermitions();
  }

  hasPermitions() {
    // Devuelve true si el usuario logueado tiene permisos para acceder a la ruta
    let user = localStorage.getItem('user');
    if (user != null) {
      let userjson = JSON.parse(user);
      if (userjson.role == 'admin') {
        return true;
      } else {
        this._snackbar.open('No tienes permisos para acceder a esta ruta', '', {
          duration: 3000,
        });
        this.router.navigate(['/main']);
        return false;
      }
    } else {
      return false;
    }
  }
}
