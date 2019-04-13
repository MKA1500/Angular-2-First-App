import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()

export class ArticlesService {
  articles = [
    {
      name: 'Master Article',
      status: 'active',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat at magna in consectetur. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus.'
    },
    {
      name: 'Test Article',
      status: 'inactive',
      content: 'Consectetur adipiscing elit.'
    },
    {
      name: 'Hidden article',
      status: 'unknown',
      content: 'Pellentesque volutpat at magna in consectetur. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addArticle(name: string, status: string, content: string) {
      this.articles.unshift({name: name, status: status, content: content});
      this.loggingService.logStatusChange(status);
  }
  updateStatus(id: number, status: string) {
      this.articles[id].status = status;
      this.loggingService.logStatusChange(status);
  }
}
