import { Injectable } from '@angular/core';
import { Resource, Autoregister, Service } from 'ngx-jsonapi';

export class Photo extends Resource {
  public attributes = {
    title: 'default_title',
    uri: ''
  };

  public relationships = {};
}

@Injectable()
// @Autoregister()
export class PhotosService extends Service<Photo> {

  public resource = Photo;
  public type = 'photos';
}
