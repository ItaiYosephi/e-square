import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthQuery } from './../auth/state/auth.query';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authQuery: AuthQuery, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const welcomeUrl = '/welcome';
    const isloggedIn = this.authQuery.getIsLoggedIn();

    if (state.url === welcomeUrl) {
      return isloggedIn ? this.router.parseUrl('/search') : true;
    } else {
      return isloggedIn ? true : this.router.parseUrl(welcomeUrl);
    }
  }
}
