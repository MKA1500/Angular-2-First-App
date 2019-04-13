import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './admin/shared/articles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: {name: string, status: string, content: string}[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.articles = this.articlesService.articles;
  }
}
