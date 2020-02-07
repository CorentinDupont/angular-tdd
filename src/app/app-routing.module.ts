import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: AppComponent
  // },
  // {
  //   path: 'authors',
  //   component: AuthorsComponent
  // },
  // {
  //   path: 'authors/:id',
  //   component: AuthorComponent,
  // },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
