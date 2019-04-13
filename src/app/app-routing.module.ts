import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ArticlesListComponent } from './admin/articles-list/articles-list.component';
import { NewArticleComponent } from './admin/new-article/new-article.component';

const articlesRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent, children: [
  //   { path: 'admin', component: ArticlesListComponent },
  //   { path: 'new', component: NewArticleComponent },
    // { path: ':id', component: ArticleDetailComponent },
    // { path: ':id/edit', component: ArticleEditComponent }
  ] },
];
@NgModule({
  imports: [RouterModule.forRoot(articlesRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
