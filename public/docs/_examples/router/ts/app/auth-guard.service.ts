// #docregion
import { Injectable }             from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
<<<<<<< HEAD
         RouterStateSnapshot }    from '@angular/router';
=======
         RouterStateSnapshot,
         NavigationExtras }       from '@angular/router';
>>>>>>> angulario/master
import { AuthService }            from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = state.url;

    // Create a dummy session id
    let sessionId = 123456789;

    // Set our navigation extras object
    // that contains our global query params and fragment
<<<<<<< HEAD
    let navigationExtras = {
=======
    let navigationExtras: NavigationExtras = {
>>>>>>> angulario/master
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}
