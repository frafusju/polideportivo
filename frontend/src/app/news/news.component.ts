import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

  news;
  loading: boolean = false;

  constructor(private http: HttpClient) {

    this.http.get('//localhost:8000/api/news').subscribe( news => {
      console.log(news);
      
      this.news = news;
    });

  }

}