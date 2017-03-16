import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../';

import { Observable } from 'rxjs';

@Injectable()
export class LoggedInGuard implements CanActivate{
    
    constructor(protected router: Router, private authService: AuthService){}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(!this.authService.isAuthenticated()){
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}