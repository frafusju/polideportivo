import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;  
  currentUserSubject: BehaviorSubject<any>;

  constructor(private authService: AuthService) {
    this.currentUserSubject = this.authService.currentUserValue;
        this.currentUserSubject.subscribe( isLogged => {
            this.isLogged = isLogged === null ? false: true;
        });    
  }

  ngOnInit() {
    const user = localStorage.getItem('user');
    
    if (user) {
      this.isLogged = true;
    }
  }

  onLogout() {
    this.authService.logout();
    this.isLogged = false;
  }
}