import { async, ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { getTestScheduler } from 'jasmine-marbles';

import { AuthorsComponent } from './authors.component';
import { NgxJsonapiModule } from 'ngx-jsonapi';
import { AuthorsService } from '../authors.service';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy } from '@angular/core';


describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

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

  it('show all the authors', async () =>  {
    const authorElements = fixture.debugElement.queryAll(By.css('.author'));
    // await fixture.whenStable();
    // component.ngOnInit();
    // spyOn(component, 'ngOnInit');
    debugger
    await new Promise<any>((res, rej) => { setTimeout(res, 1000); });
    debugger
    fixture.detectChanges();

    expect(authorElements.length).toBeGreaterThan(3); debugger
  });
});
