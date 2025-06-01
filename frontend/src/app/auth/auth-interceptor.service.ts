import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {    

    intercept(request: HttpRequest<any>, next: HttpHandler) {   
        
        const token: string = localStorage.getItem('token');
        let req = request;
        
        if(token) {
            req = request.clone({
                setHeaders: {
                    authorization: `Bearer ${ token }`
                }
            });
        }       
        
        return next.handle(req)
    }    
}