import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    
    isLogged: boolean = null;
    
    currentUserSubject: BehaviorSubject<any>;

    constructor(private authService: AuthService, private router: Router) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        
        /* this.authService.isLoggedIn().subscribe( response => {            
            console.log(response);            
            this.isLogged = true;
        }, error => {            
            console.log(error);            
            this.isLogged = false;
        });         */

        this.isLogged = localStorage.getItem('user') ? true : false;
                
        if (/* this.isLogged !== null &&  */!this.isLogged) {        
            this.router.navigate(['/auth']);
            return false;    
        } else {
            return true;
        }
    }
}