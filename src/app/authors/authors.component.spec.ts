import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import Pretender from 'pretender';

import { AuthorsComponent } from './authors.component';
import { NgxJsonapiModule } from 'ngx-jsonapi';
import { AuthorsService } from '../authors.service';
import { By } from '@angular/platform-browser';
import { authors } from './authors.mock';
import { AuthorComponent } from '../author/author.component';
import { ActivatedRoute } from '@angular/router';
import { MockActivatedRoute } from '../../mocks/activated-routes';
import { of } from 'rxjs';

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
  //     // spyOn(component, 'ngOnInit');
  //     fixture.detectChanges();
  //     const authorElements = fixture.debugElement.queryAll(By.css('.author'));
  //     expect(authorElements.length).toBeGreaterThan(3);
  // }));

  

  // click on author in authors component (last one)
  // it('should navigate to the /authors/:id page', () => {
  //   // test the route
  // });

  // unit test getting id in url
  // it('should set id variable', () => {
  //   const id = component.getIdInUrl('/author/123456789');
  //   expect(id).toBe('123456789');
  // });

  // it('show all the authors pretender', (done) => {
  //   server = new Pretender( function() {
  //     this.get('//jsonapiplayground.reyesoft.com/v2/authors', request => {
  //       return [200, {ContentType: 'application/json'}, JSON.stringify(authors)];
  //     });
  //   });

  //   server.handledRequest = (verb, path, request) => {
  //     fixture.detectChanges();
  //     const authorElements = fixture.debugElement.queryAll(By.css('.author'));
  //     expect(authorElements.length).toBeGreaterThan(3);
  //     done();
  //   };
  // });

});

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;
  let activeRoute: MockActivatedRoute;

  beforeEach(() => {
    activeRoute = new MockActivatedRoute();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorComponent ],
      imports: [
        NgxJsonapiModule,
        NgxJsonapiModule.forRoot({
          url: '//jsonapiplayground.reyesoft.com/v2/'
        }),
      ],
      providers : [
        AuthorsService,
        {
          provide: ActivatedRoute, useValue: {
            params: of({ id: '1' })
          }
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    activeRoute.testParams = { id: 1 };
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // init author component with fake id param in route, and test if function is c`alled with this id

  // show one author (test text in div with class 'name')
  it('show name of the author', async () => {
    debugger
    await new Promise<any>((res, rej) => { setTimeout(res, 1000); });
    fixture.detectChanges();
    const authorName = fixture.debugElement.query(By.css('#name'));
    debugger
    expect(authorName.nativeElement.innerText.trim()).toBe('Ramiro Turner II');
  });

  // show books list (count of div with class .book)
});
