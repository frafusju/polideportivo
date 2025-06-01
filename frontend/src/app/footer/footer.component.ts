import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  isLogged: boolean = false;  

  constructor(private authService: AuthService) {    
    this.authService.currentUserValue.subscribe( isLogged => {
            this.isLogged = isLogged === null ? false: true;
            console.log(isLogged);            
        });
  }

  ngOnInit() {
    const user = localStorage.getItem('user');
    
    if (user) {
      this.isLogged = true;
    }
  }
  

  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
}