import { async, ComponentFixture, TestBed, fakeAsync, tick, flush, inject } from '@angular/core/testing';
import { getTestScheduler } from 'jasmine-marbles';
import Pretender, { ResponseHandler } from 'pretender';

import { AuthorsComponent } from './authors.component';
import { NgxJsonapiModule } from 'ngx-jsonapi';
import { AuthorsService } from '../authors.service';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, NgZone } from '@angular/core';
import { authors } from './authors.mock';
import { $ } from 'protractor';


describe('AuthorsComponent', () => {

  // const server = new Pretender( function() {
  //   this.get('/authors', request => {
  //     const all = JSON.stringify(Object.keys(authors).map(k => authors[k]));
  //     return [200, {ContentType: 'application/json'}, all];
  //   });
  // });

  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;
  let ngZone: NgZone;
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

  // beforeEach(inject([NgZone], (injectedNgZone: NgZone) => {
  //   ngZone = injectedNgZone;
  //   fixture = TestBed.createComponent(AuthorsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // }));

  beforeEach(() => {
    // tslint:disable-next-line: no-unused-expression
    server = new Pretender( function() {
      this.get('//jsonapiplayground.reyesoft.com/v2/authors', request => {
        debugger
        return [200, {ContentType: 'application/json'}, JSON.stringify(authors)];
      });
    });
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('show all the authors', async( async () =>  {
  //   // ngZone.run(() => {
  //     // expect(fixture.isStable()).toBeFalsy();
  //     // await fixture.whenStable();
  //     // // fixture.detectChanges();

  //     // expect(fixture.isStable()).toBeTruthy();
  //     // component.ngOnInit();
  //     // spyOn(component, 'ngOnInit');
  //     // debugger
  //     await new Promise<any>((res, rej) => { setTimeout(res, 1000); });
  //     // debugger
  //     fixture.detectChanges();
  //     const authorElements = fixture.debugElement.queryAll(By.css('.author'));
  //     expect(authorElements.length).toBeGreaterThan(3);
  //   // });
  // }));

  it('show all the authors pretender', (done) => {
    server.handledRequest = (verb, path, request) => {
      console.log('WOW WTF')
      fixture.detectChanges();
      const authorElements = fixture.debugElement.queryAll(By.css('.author'));
      expect(authorElements.length).toBeGreaterThan(3);
      done();
    };
  });

});
