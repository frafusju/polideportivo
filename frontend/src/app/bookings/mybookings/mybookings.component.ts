import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  loading: boolean = false;
  bookings;
  areBookings: boolean = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {    
    this.loading = true;
    const user = localStorage.getItem('user');    
    this.http.get('//localhost:8000/api/bookings/booking/' + user).subscribe( bookings => {
      this.bookings = bookings;
      
      this.areBookings = Object.keys(bookings).length === 0 ? false : true;      
      this.loading = false;      
    });  
  }

  onCollapse(event) {    
    const clicked_element = event.target.localName;
    const icon = clicked_element === "button" ? event.srcElement.firstChild : event.srcElement;        
    const data_target = event.target.dataset.target;
    const collapsable_element = document.querySelector(data_target);

    if (icon.className.includes('oi-chevron-right')) {
      if (document.querySelector('.oi-chevron-bottom') && !collapsable_element.className.includes('show')) {
        document.querySelector('.oi-chevron-bottom').classList.add('oi-chevron-right');
        document.querySelector('.oi-chevron-bottom').classList.remove('oi-chevron-bottom');
      }      
      icon.classList.remove('oi-chevron-right');
      icon.classList.add('oi-chevron-bottom');
    } else {
      if (document.querySelector('.oi-chevron-bottom') && collapsable_element.className.includes('show')) {
        document.querySelector('.oi-chevron-bottom').classList.add('oi-chevron-right');
        document.querySelector('.oi-chevron-bottom').classList.remove('oi-chevron-bottom');
      }

      icon.classList.remove('oi-chevron-bottom');
        icon.classList.add('oi-chevron-right');
    } 
  } 

}