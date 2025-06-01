import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {  

  facility_id: number;  
  facility;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.facility_id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {    
    this.ShowFacilityDetails(this.facility_id);
  }

  private ShowFacilityDetails(facility_id: number) {
    this.http.get<Object[]>('//localhost:8000/api/facilities/' + facility_id).subscribe(facility => {    
      this.facility = facility;
    }, error => {
      console.log(error);      
    });
  }
}
