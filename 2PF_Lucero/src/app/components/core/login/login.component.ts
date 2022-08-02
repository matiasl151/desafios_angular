import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.formularioLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/main');
    }
  }

  login() {
    if (this.formularioLogin.valid) {
      let username = this.formularioLogin.get('username')?.value;
      let password = this.formularioLogin.get('password')?.value;

      if (username == 'admin' && password == 'admin') {
        localStorage.setItem('token', '123456789');
        this.router.navigateByUrl('/main');
        this._snackBar.open('Login successful', 'Close', {
          duration: 2000,
        });
      } else {
        // alert('Usuario o contraseña incorrectos');
        this._snackBar.open('Usuario o contraseña incorrectos', 'Cerrar', {
          duration: 2000,
        });
      }
    }
  }
}
