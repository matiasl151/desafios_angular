import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  token = localStorage.getItem('token');
  user = '';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  ngOnInit() {
    if (this.token == '123456789') {
      this.user = 'admin';
    } else {
      this.user = 'user';
    }
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
