import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log('Authentication');
    const expectedRole = route.data.role;
    console.log('Expected role: ', expectedRole);
    const account = JSON.parse(localStorage.getItem('account'));
    console.log(account);
    
    if (!account || account.role !== expectedRole) {
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }
}
