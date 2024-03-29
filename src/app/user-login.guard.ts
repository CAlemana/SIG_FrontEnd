import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user_service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard implements CanActivate {

  constructor(private router:Router, private userService:UserService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLogin = this.userService.getStatusLogin('isLogin');

    if(isLogin === 'true'){
      return true;
    }
    else{
      return false;
    }
  }
  
}
