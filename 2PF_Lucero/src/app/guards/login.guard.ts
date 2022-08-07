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
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private _snackbar: MatSnackBar) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.loggedIn();
  }

  loggedIn() {
    // Si el usuario está logueado, devuelve true
    if (localStorage.getItem('user')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      this._snackbar.open('You must be logged in to access this page', '', {
        duration: 3000,
      });
      return false;
    }
  }
}
