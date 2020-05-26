import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {

    // @ Bug fixes
    this.authService.validateToken()

    return this.authService.canActivateProtectedRoutes$
      .pipe(
        tap(x => console.log('You tried to go to ' + state.url + ' and this guard said ' + x)),
        tap(x => !x && this.router.navigate(['/login'])));
  }
}
