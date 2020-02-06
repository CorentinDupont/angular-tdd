import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';

import { NgxJsonapiModule } from 'ngx-jsonapi';
import { AuthorsService } from './authors.service';
import { BooksService } from './books.service';
import { PhotosService } from './photos.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJsonapiModule.forRoot({
      url: '//jsonapiplayground.reyesoft.com/v2/'
    }),
  ],
  providers: [ AuthorsService, BooksService, PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
