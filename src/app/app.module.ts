import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { NewitemComponent } from './new-item/new-item.component';
import { ItemsService } from './shared/items.service';
import { LoggingService } from './shared/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NewitemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ItemsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
