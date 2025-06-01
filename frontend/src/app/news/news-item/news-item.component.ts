import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  news_id: number;
  news_item;

  body: string;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.news_id = params['id'];

      this.http.get('//localhost:8000/api/news/' + this.news_id).subscribe( news_item => {
        this.news_item = news_item;        
      });
    });
  }
}