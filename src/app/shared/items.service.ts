import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable()

export class ItemsService {
  items = [
    {
      name: 'Master Item',
      status: 'active',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat at magna in consectetur. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus.'
    },
    {
      name: 'Test Item',
      status: 'inactive',
      content: 'Consectetur adipiscing elit.'
    },
    {
      name: 'Hidden item',
      status: 'unknown',
      content: 'Pellentesque volutpat at magna in consectetur. Cras feugiat mattis egestas. Curabitur et commodo tortor. Phasellus maximus lectus id sem sodales, et condimentum felis maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  addItem(name: string, status: string, content: string) {
      this.items.unshift({name: name, status: status, content: content});
      this.loggingService.logStatusChange(status);
  }
  updateStatus(id: number, status: string) {
      this.items[id].status = status;
      this.loggingService.logStatusChange(status);
  }
}
