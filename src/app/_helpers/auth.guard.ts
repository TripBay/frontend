import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

import { AuthenticationService } from '@app/_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser){
          // check if route is restricted by role
          if (route.data.roles && route.data.roles.indexOf(currentUser.role_name) === -1) {
            // role not authorised so redirect to sign in
            this.router.navigate(['/sign/in']);
            return false;
          }
          return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/sign/in'], { queryParams: { returnUrl: state.url } });
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.authenticationService.currentUserValue;
      if (currentUser){
        // check if route is restricted by role
        if (route.data.roles && route.data.roles.indexOf(currentUser.role_name) === -1) {
          // role not authorised so redirect to sign in
          this.router.navigate(['/sign/in']);
          return false;
        }
        return true;
      }

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/sign/in'], { queryParams: { returnUrl: state.url } });
      return false;
  }
}
