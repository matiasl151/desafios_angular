import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  compName: string = '';
  username: string = '';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    //TODO: get componnet name
    // Get the current username from the local storage
    this.username = this._authService.getUser();
  }

  logout() {
    this._authService.logout();
    this.router.navigateByUrl('/login');
  }
}
