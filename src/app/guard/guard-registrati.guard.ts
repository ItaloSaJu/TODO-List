import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterLink, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardRegistratiGuard implements CanActivate {

  constructor(private route: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let password : string = '123'

      let psw = prompt('inserisce password')



      if(psw == password){
        sessionStorage.setItem('password',psw)
        return true

      }
      sessionStorage.removeItem('password')
      alert('las pass non è corretta')
      return false

  }

}
