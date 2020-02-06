import { TestBed } from '@angular/core/testing';

import { AuthorsService, Author } from './authors.service';
import { NgxJsonapiModule } from 'ngx-jsonapi';

describe('AuthorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AuthorsService],
  }));

  it('should be created', () => {
    const service: AuthorsService = TestBed.get(AuthorsService);
    expect(service).toBeTruthy();
  });
});
