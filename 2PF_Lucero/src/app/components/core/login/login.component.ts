import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/users.interface';

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
    private authService: AuthService
  ) {
    this.formularioLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/main']);
    }
  }

  login() {
    // const user = {
    //   email: this.formularioLogin.value.username + '@example.com',
    //   password: this.formularioLogin.value.password,
    //   username: this.formularioLogin.value.username,
    //   role: '' as User['role'],
    //   id: 0 as User['id'],
    // };
    const user = this.formularioLogin.value as User;

    this.authService.login(user).subscribe(res => {
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['/main']);
    });
    this.formularioLogin.reset();
  }
}
