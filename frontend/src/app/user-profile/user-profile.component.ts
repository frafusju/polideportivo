import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { loadStripe } from '@stripe/stripe-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {  

  userId: number;
  user: any;
  subscription: any;
  loading: boolean = false;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {
    if(localStorage.getItem('user')) {
      this.userId = parseInt(localStorage.getItem('user'));
      
      this.http.get('//localhost:8000/api/users/' + this.userId).subscribe( user => {        
        this.user = user;
        this.http.get('//localhost:8000/api/subscription/' + this.userId).subscribe( subscription => {          
          this.subscription = subscription;            
        });
      });
    }
  }
  
  onSubscribe() {
    this.loading = true;//starts spinner
    const birth_date: Date = this.user.birth_date;
    const age: number = this.calculateAge(birth_date);
    let membership: number;
    let membership_price_id: number;

    if (age > 18) {
      membership = 1;
    } else if (age >= 14) {
      membership = 2;
    } else {
      membership = 3;
    }

    //Get Stripe pricesId and set the line_items object
    this.http.get('//localhost:8000/api/membership/' + membership).subscribe( membershipObj => {          
      membership_price_id = membershipObj['fee_id'];      

      let request = {        
        'email': this.user.email,
        'line_items': [
          {
          'price': membership_price_id,
          'quantity': 1
          }
        ],
        'mode': 'subscription'
      }

      //Creates Stripe session in backend and redirects to checkout
      this.http.post('//localhost:8000/api/stripe', request).subscribe( async response => {
        this.http.post('//localhost:8000/api/subscription', { 'users_id': this.userId, 'membership_fees_id': membershipObj['id'] }).subscribe( async() => {
          const stripe = await loadStripe('pk_test_eT7IJcXEfzDloYoASwoEqzCx00L7pDWLjc');          
          this.loading = false; //stops spinner
          const {error} = await stripe.redirectToCheckout({
            sessionId: response['id']        
          });
        });
      });

    });    
  }

  onCancelSubscription() {    
    this.loading = true;//starts spinner
    this.http.post('//localhost:8000/api/subscription/cancel', { 'subscription': this.subscription.stripe_subscription_id }).subscribe( response => {      
      this.loading = false;//stops spinner
      console.log(response);
      this.redirectTo('/perfil-usuario');
    })
  }

  onRenewSubscription() {
    this.loading = true;//starts spinner
    this.http.post('//localhost:8000/api/subscription/renew', { 'subscription': this.subscription.stripe_subscription_id }).subscribe( response => {
      this.loading = false;//stops spinner
      console.log(response);
      this.redirectTo('/perfil-usuario');
    })
  }

  private calculateAge(birth_date: Date) {
    let today = new Date();
    let birth = new Date(birth_date);
    let age = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth();
    
    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
  }

  private redirectTo(uri:string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
}