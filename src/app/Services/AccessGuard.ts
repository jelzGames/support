import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { AuthService } from '../Services/Auth';

@Injectable()
export class AccessGuardService implements CanActivate {
  
  constructor(private auth : AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    const requiresLogin = route.data['requiresLogin'] || false;
    if (requiresLogin) {
       let flag = this.auth.isAuthenticated;
       if (!flag) {
          this.auth.logout();  
       }
       return flag; 
    }
  }
}