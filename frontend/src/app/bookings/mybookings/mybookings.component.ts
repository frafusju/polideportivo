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

    // Depuración: Verifica el valor de localStorage
    const userRaw = localStorage.getItem('user');
    console.log('Valor de localStorage (user):', userRaw);

    let userId = null; // Inicializa userId con un valor predeterminado

    try {
        const user = JSON.parse(userRaw || 'null');
        userId = typeof user === 'number' ? user : user?.id;
    } catch (error) {
        console.error('Error al analizar el valor de localStorage (user):', error);
    }

    if (!userId) {
        console.error('No se encontró el ID del usuario en localStorage');
        alert('Por favor, inicia sesión para ver tus reservas.');
        this.loading = false;
        this.areBookings = false;
        return;
    }

    // Realiza la solicitud al backend
    this.http.get(`//localhost:8000/api/bookings/booking/${userId}`).subscribe((bookings: any[]) => {
        console.log('Reservas obtenidas:', bookings); // Para depuración
        this.bookings = bookings;
        this.areBookings = bookings.length > 0;
        this.loading = false;
    }, error => {
        console.error('Error al cargar las reservas:', error);
        this.loading = false;
        this.areBookings = false;
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