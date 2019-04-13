import { Component, Input } from '@angular/core';
import { LoggingService } from '../shared/logging.service';
import { ItemsService } from '../shared/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  // providers: [LoggingService]
})
export class ItemComponent {
  @Input() item: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private itemsService: ItemsService) { }

  onSetTo(status: string) {
    this.itemsService.updateStatus(this.id, status);
    this.itemsService.statusUpdated.emit(status);
  }
}
