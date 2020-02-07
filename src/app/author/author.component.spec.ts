import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorComponent } from './author.component';
import { NgxJsonapiModule } from 'ngx-jsonapi';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorComponent ],
      imports: [
        NgxJsonapiModule,
        NgxJsonapiModule.forRoot({
          url: '//jsonapiplayground.reyesoft.com/v2/'
        }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // unit test getting id in url

  // init author component test if var id is set

  // show one author (test text in div with class 'name')

  // show books list (count of div with class .book)
});
