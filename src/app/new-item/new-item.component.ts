import { Component } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { ItemsService } from '../shared/items.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],
  // providers: [LoggingService]
})
export class NewitemComponent {

  constructor(private loggingService: LoggingService,
              private itemsService: ItemsService) {
  }

  onCreateItem(itemName: string, itemStatus: string, itemContent: string) {
    this.itemsService.addItem(itemName, itemStatus, itemContent);
    this.loggingService.logStatusChange(itemStatus);
    console.log('new item name: ' + itemName);
  }
}
