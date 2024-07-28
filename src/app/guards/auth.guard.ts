import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private jwtHelper: JwtHelperService, 
    private toastr: ToastrService){}

  canActivate(){
    const token = localStorage.getItem("jwt");

    if(token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }

    this.showError("User is currently not logged on");
    this.router.navigate(["login"]);
    return false;
  }

  private showError(msg: string){
    this.toastr.warning(msg, 'Error');
  }
};
