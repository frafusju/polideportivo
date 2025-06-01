import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {  
  
  isLoginMode = true;  
  password_error = null;
  dni_focus = false;
  password_focus = false; 
  loading = false; 
  loginError: boolean = false;
  email_already_used: boolean = false;
  
  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoginError.subscribe( loginError => {
      this.loginError = loginError;
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLogin(form: NgForm) {  
    this.loading = true;
    const loginData = {
      email:    form.value.email,
      password: form.value.password
    }
    
    this.authService.login(loginData);

    this.authService.isLoginError.subscribe( loginError => {
      if(loginError) {
        this.loading = false;
      }
    });
  }  
  
  onCreateAccount(form: NgForm) {
    this.loading = true;

    if (form.value.password1 !== form.value.password2) {
      this.password_error = "Las contraseñas no coinciden";
      return;
    }

    if (form.valid && !this.password_error) {
      const userData = {
        name:       form.value.name,
        surname:    form.value.surname,
        birth_date: form.value.birth_date,
        dni:        form.value.dni,
        password:   form.value.password1,
        email:      form.value.email
      };
      
      this.authService.signup(userData).subscribe(response => {        
        console.log(response);
        this.loading = false;
        this.authService.login({'email': userData.email, 'password': userData.password})        
      }, error => {          
        console.log(error);
        if (error.error.message.includes("users_email_unique")) {
          this.email_already_used = true;
          this.loading = false;
        } else {
          form.reset();
          this.loading = false;    
        }
      });      
    }
  }
}