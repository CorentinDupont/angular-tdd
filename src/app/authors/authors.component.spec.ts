import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import Pretender from 'pretender';

import { AuthorsComponent } from './authors.component';
import { NgxJsonapiModule } from 'ngx-jsonapi';
import { AuthorsService } from '../authors.service';
import { By } from '@angular/platform-browser';
import { authors } from './authors.mock';

describe('AuthorsComponent', () => {

  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;
  let server;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsComponent ],
      imports: [
        NgxJsonapiModule,
        NgxJsonapiModule.forRoot({
          url: '//jsonapiplayground.reyesoft.com/v2/'
        }),
      ],
      providers: [AuthorsService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('show all the authors', async( async () =>  {
  //     await new Promise<any>((res, rej) => { setTimeout(res, 1000); });
  //     fixture.detectChanges();
  //     const authorElements = fixture.debugElement.queryAll(By.css('.author'));
  //     expect(authorElements.length).toBeGreaterThan(3);
  // }));

  it('show all the authors pretender', (done) => {
    server = new Pretender( function() {
      this.get('//jsonapiplayground.reyesoft.com/v2/authors', request => {
        return [200, {ContentType: 'application/json'}, JSON.stringify(authors)];
      });
    });

    server.handledRequest = (verb, path, request) => {
      fixture.detectChanges();
      const authorElements = fixture.debugElement.queryAll(By.css('.author'));
      expect(authorElements.length).toBeGreaterThan(3);
      done();
    };
  });

});
