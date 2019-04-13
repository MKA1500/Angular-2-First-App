import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin/admin.component';
import { ArticlesListComponent } from './admin/articles-list/articles-list.component';
import { NewArticleComponent } from './admin/new-article/new-article.component';
import { ArticlesService } from './admin/shared/articles.service';
import { LoggingService } from './admin/shared/logging.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminHeaderComponent,
    AdminComponent,
    ArticlesListComponent,
    NewArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ArticlesService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
