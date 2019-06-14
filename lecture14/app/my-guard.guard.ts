import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OnlineDataService } from './online-data.service';

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard implements CanActivate {
  constructor(
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    var numericRepr = parseFloat(route.paramMap.get('uiid'));
    return !isNaN(numericRepr)
  }
}
