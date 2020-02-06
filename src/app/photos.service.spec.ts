import { TestBed } from '@angular/core/testing';

import { PhotosService } from './photos.service';
import { NgxJsonapiModule } from 'ngx-jsonapi';

describe('PhotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [PhotosService],
  }));

  it('should be created', () => {
    const service: PhotosService = TestBed.get(PhotosService);
    expect(service).toBeTruthy();
  });
});
