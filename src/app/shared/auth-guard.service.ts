import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Authservice } from './authservice.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private authservice: Authservice)  {}

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authservice.isAuthenticated();
     }
}
