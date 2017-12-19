import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthService } from '../auth/auth.service';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { Router } from '@angular/router';

@Injectable()
export class LogginGuardService implements CanActivate {

  constructor(private auth: AuthService,private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot){
    if (!this.auth.isLoggedIn()){
        this.route.navigate(['welcome'])
    }
    return this.auth.isLoggedIn();
  }


}
