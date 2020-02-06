import { TestBed } from '@angular/core/testing';

import { BooksService } from './books.service';
import { NgxJsonapiModule } from 'ngx-jsonapi';

describe('BooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [BooksService],
  }));

  it('should be created', () => {
    const service: BooksService = TestBed.get(BooksService);
    expect(service).toBeTruthy();
  });
});
