import { Injectable } from '@angular/core';
import { Resource, DocumentCollection, DocumentResource, Autoregister, Service } from 'ngx-jsonapi';
import { Book } from './books.service';
import { Photo } from './photos.service';

export class Author extends Resource {
  public attributes = {
    name: 'default_name',
    date_of_birth: '',
  };

  public relationships = {
    books: new DocumentCollection<Book>(),
    photo: new DocumentResource<Photo>(),
  };
}

@Injectable()
// @Autoregister()
export class AuthorsService extends Service<Author> {

  public resource = Author;
  public type = 'authors';
}
