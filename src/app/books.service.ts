import { Injectable } from '@angular/core';
import { Resource, Autoregister, Service } from 'ngx-jsonapi';

export class Book extends Resource {
  public attributes = {
    title: 'default_title',
    date_published: '',
    isbn: '',
  };

  public relationships = {};
}

@Injectable()
@Autoregister()
export class BooksService extends Service<Book> {

  public resource = Book;
  public type = 'books';
}
