import { Component } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { ArticlesService } from '../shared/articles.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css'],
  // providers: [LoggingService]
})
export class NewArticleComponent {

  constructor(private loggingService: LoggingService,
              private articlesService: ArticlesService) {
  }

  onCreateArticle(articleName: string, articleStatus: string, articleContent: string) {
    this.articlesService.addArticle(articleName, articleStatus, articleContent);
    this.loggingService.logStatusChange(articleStatus);
    console.log('new article name: ' + articleName);
  }
}
