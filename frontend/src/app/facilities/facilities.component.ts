import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {

  facilities;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchFacilities();
  }

  private fetchFacilities() {
    this.http.get<Object[]>('//localhost:8000/api/facilities').subscribe(facilities => {          
      this.facilities = facilities;      
    }, error => {
      console.log(error);      
    });
  }  
}