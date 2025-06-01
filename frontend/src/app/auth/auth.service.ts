import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

interface UserData {
    name: string;
    surname: string;    
    birth_date: string;
    dni: string;
    password: string;
    email: string;
}

interface LoginData {
    email: string;
    password: string;
}

@Injectable({providedIn: 'root'})
export class AuthService {   

    private currentUserSubject: BehaviorSubject<any>;
    private loginError: BehaviorSubject<any>;
    
    constructor(private http: HttpClient, private router: Router) {        
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.loginError = new BehaviorSubject<any>(false);
    }

    signup(userData: UserData) {                
        return this.http.post<any>('//localhost:8000/api/users', userData);
    }

    login(loginData: LoginData) {     
        this.http.post<any>('//localhost:8000/api/auth/login', loginData).subscribe( response => {                                    
        localStorage.setItem('token', response.access_token);            
            localStorage.setItem('user', response.user.id);            

            this.currentUserSubject.next(response.user.id);            
        this.router.navigate(['../perfil-usuario']);
    }, loginError => {                            
        console.log(loginError);            
            if(loginError.error.error === "Unauthorized") {
            this.loginError.next(true);                
        }
    });
    }

    logout() {
        this.http.post('//localhost:8000/api/auth/logout', {}).subscribe( () => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');            
            this.currentUserSubject.next(null);
            this.router.navigate(['/']);
            console.log("LOGOUT");
            
        }, logoutError => {
            console.log(logoutError);                
        });
    }
    
    /* isLoggedIn() {
        return this.http.post('//localhost:8000/api/auth/me', {});
    } */

    public get currentUserValue() {
        return this.currentUserSubject;
    }

    public get isLoginError() {
        return this.loginError;
    }
}