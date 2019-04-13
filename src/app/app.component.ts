import { Component, OnInit } from '@angular/core';
import { ItemsService } from './shared/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: {name: string, status: string, content: string}[] = [];

  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.items = this.itemsService.items;
  }
}
