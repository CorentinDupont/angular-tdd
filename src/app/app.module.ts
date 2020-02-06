import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';

import { NgxJsonapiModule } from 'ngx-jsonapi';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxJsonapiModule.forRoot({
      url: '//jsonapiplayground.reyesoft.com/v2/?include=books,photos'
    }) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
