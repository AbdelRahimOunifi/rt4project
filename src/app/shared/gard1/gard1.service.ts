import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class Gard1Service implements CanActivate  {

  constructor(private auth: AuthService,private route: Router) { }
  canActivate(route: ActivatedRouteSnapshot){
    if (!this.auth.isLoggedIn()){
        this.route.navigate(['welcome']);
        return false;
    }
    if(!this.auth.isAdministrator()){
      this.route.navigate(['welcome']);
      return false;
    }
    return this.auth.isAdministrator();
  }
}
