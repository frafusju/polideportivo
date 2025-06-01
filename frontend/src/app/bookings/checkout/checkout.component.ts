import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {  

  token: string;
  booking = {
    facility: "",
    date: "",
    start_time: "",
    end_time: "",
    light: null,
    total_amount: null
  };

  loading = false;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.token = this.route.snapshot.queryParams['session_id'];

    this.http.get('//localhost:8000/api/bookings/' + this.token).subscribe( booking => {
      
      this.http.get('//localhost:8000/api/facilities/' + booking['facilities_id']).subscribe( facility => {
        this.booking.facility = facility['name'];
      });    
      
      this.booking.date = booking['date'];
      this.booking.start_time = booking['start_time'];
      this.booking.end_time = booking['end_time'];
      this.booking.light = booking['light'];
      this.booking.total_amount = booking['total_amount'];      
      this.loading = false;
    });
  }
}