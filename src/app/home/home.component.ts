import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../admin/shared/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: {name: string, status: string, content: string}[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.articles = this.articlesService.articles;
    console.log(this.articles);
  }
}
