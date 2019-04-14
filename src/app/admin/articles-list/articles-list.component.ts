import { Component, Input } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { ArticlesService } from '../shared/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
  // providers: [LoggingService]
})
export class ArticlesListComponent {
  @Input() article: {title: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private articlesService: ArticlesService) { }

  onSetTo(status: string) {
    this.articlesService.updateStatus(this.id, status);
    this.articlesService.statusUpdated.emit(status);
  }
}
