import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './shared/articles.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  articles: {name: string, status: string, content: string}[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit() {
    this.articles = this.articlesService.articles;
  }
}
