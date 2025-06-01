import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  today: string;
  facilities: Object;
  facilitySelected: number = 1;
  facility_price: number = 0;
  light_price: number = 0;  
  dateSelected: string;
  start_time: string = "08:00";  
  end_time: string = "09:00";  
  lightSelected: number = 1;
  total_amount: number = 0;
  hours: number = 1;
  hoursAlreadyBooked = [];  
  facility_price_id: string;
  light_price_id: string = null;
  already_booked: boolean = false;
  userId: number;
  user: any;
  loading: boolean = false;

  constructor(private http: HttpClient, private authService: AuthService) {
    //Loads booked hours in info table
    this.loadBookingTimes();
    
    //Formats today date to show on form
    this.today = this.formatDate(new Date());
    this.dateSelected = this.formatDate(new Date());

    console.log(this.dateSelected);
    
    
    //Gets current user info
    this.authService.currentUserValue.subscribe( userId => {
      this.userId = JSON.parse(localStorage.getItem('user'));

      this.http.get('//localhost:8000/api/users/' + this.userId).subscribe(
    user => {
        this.user = user;
    },
    error => {
        console.error('Error al cargar los datos del usuario:', error);
        this.user = null; // Asegúrate de que sea null si hay un error
    }
); 
    });    
    
    //Get list of facilities on init to show on form
    this.http.get('//localhost:8000/api/facilities').subscribe( facilities => {    
      this.facilities = facilities;      
      
      this.http.get('//localhost:8000/api/facilities/' + this.facilitySelected).subscribe( facility => {      
        this.light_price = facility['price_light'];
  
        //Calculates total_amount
        this.hours = this.calculateBookingTime(this.dateSelected, this.start_time, this.end_time);
        this.calculateTotalAmount();
      });
    });    
  }  

  /** Fires every time date or facility changes to update booked hours table */
  onChange() {
    this.hoursAlreadyBooked = [];
    this.loadBookingTimes();
    this.calculateTotalAmount();
  }
  
  /** Fires every time user changes time */
  onChangeTime() {   
    this.already_booked = false; 
    this.hours = this.calculateBookingTime(this.dateSelected, this.start_time, this.end_time);
    this.calculateTotalAmount();
    let start = parseInt(this.start_time);

    if ( (this.hours === 1) && this.hoursAlreadyBooked.includes(start) || 
         (this.hours === 2 && (this.hoursAlreadyBooked.includes(start) || this.hoursAlreadyBooked.includes(start+1))) ) {
      this.already_booked = true;
    }
  }

  onBooking(form: NgForm) {
    if (form.valid && !this.already_booked) {
        // Verifica si el usuario está definido
        if (!this.user) {
            alert('Error: No se pudo cargar la información del usuario. Por favor, inténtelo de nuevo.');
            return;
        }

        if (this.user.is_active) {
            // Lógica para usuarios activos
            let bookingData = {
                user: this.user.id,
                facility: this.facilitySelected,
                date: this.dateSelected,
                start_time: this.start_time,
                end_time: this.end_time,
                light: this.lightSelected,
                total_amount: 0,
                token: this.generateToken(),
            };

            this.http.post('//localhost:8000/api/bookings', bookingData).subscribe(() => {
                this.loading = false;
                alert('Reserva realizada con éxito.');
                this.loadBookingTimes();
            }, error => {
                this.loading = false;
                alert('Ocurrió un error al realizar la reserva.');
            });
        } else {
            // Lógica para usuarios no activos
            this.calculateTotalAmount();
            // Resto de la lógica...
        }
    }
  }

  //Formats date to "yyyy-mm-dd" string
  private formatDate(date: Date): string {    
    const day = date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate();
    const month = (date.getMonth()+1) < 10 ? ("0" + (date.getMonth()+1).toString()) : (date.getMonth()+1);
    const year = date.getFullYear();    

    return year + "-" + month + "-" + day;
  }

  //Calculates if the booking time is 1 hour or 2
  private calculateBookingTime(date: string, start: string, end: string) {

    let start_date = new Date(date + " " + start);
    let end_date = new Date(date + " " + end);
    let difference = end_date.getHours() - start_date.getHours();

    return difference;
  }  

  //Gets the hours already booked for the selected facility on the selected date
  private loadBookingTimes() {
    this.http.get('//localhost:8000/api/bookings/' + this.dateSelected + "/" + this.facilitySelected).subscribe( bookings => {              

      for (let i in bookings) {        
          let start_time = parseInt(bookings[i]['start_time']);
          let end_time = parseInt(bookings[i]['end_time']);
          let duration = end_time - start_time;
          
          if(duration === 1) {
            this.hoursAlreadyBooked.push(start_time);
          } else if (duration === 2) {
            this.hoursAlreadyBooked.push(start_time, start_time+1);
          }
        }

        //Fills the info table after getting all booked hours
        this.fillBookingTable();    
      });
  }

  //Fills an informative table with already booked times
  private fillBookingTable() {

    //Removes "booked" class to the elements that had been marked before
    let elements = document.getElementsByClassName("booked");
    [].forEach.call(elements, function(element) {
      element.classList.remove("booked");
    });

    //Add "booked" class to the hours already reserved
    for (let i=0; i<this.hoursAlreadyBooked.length; i++) {      
      let hour = this.hoursAlreadyBooked[i];
      let element = document.getElementById(hour);      
      element.classList.add("booked");
    }    
  }

  // Calculates total amount      
  private calculateTotalAmount() {
    this.http.get('//localhost:8000/api/facilities/' + this.facilitySelected).subscribe( facility => {      
      this.facility_price = this.user.is_active && facility['price_member'] ? parseFloat(facility['price_member']) : parseFloat(facility['price']);
      this.light_price = parseFloat(facility['price_light']);
      this.total_amount = this.lightSelected === 1 ? (this.facility_price + this.light_price) * this.hours : this.facility_price * this.hours;
    });
  }
  private generateToken(): string {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  }
}