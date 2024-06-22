import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from '../services/ath.service';
import { map, tap } from 'rxjs';
// https://www.udemy.com/course/angular-fernando-herrera/learn/lecture/37399836#reviews

@Injectable({providedIn: 'root'})
export class PublicGuard implements CanMatch,  CanActivate {

  constructor(
    private _authService : AuthService,
    private _router: Router
  ) { }

  private checkAuthStatus() :  MaybeAsync<GuardResult>{
    return this._authService.checkAutenticatication()
    .pipe(
      tap( isAuthenticated => {
        if(isAuthenticated) {
          this._router.navigate(['./'])
        }
      }),
      map(isAuthenticated => !isAuthenticated)
    )
  }

  canMatch(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    // console.log('Can Match')
    // console.log({route, segments})
    // return true;
    return this.checkAuthStatus()
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    // console.log('Can Active')
    // console.log({route, state})
    // return true;
    return this.checkAuthStatus()
  }


}
