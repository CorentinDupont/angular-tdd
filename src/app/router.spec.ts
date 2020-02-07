/* tslint:disable:no-unused-variable */
import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorComponent } from './author/author.component';
import { routes } from './app-routing.module';


describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [RouterTestingModule.withRoutes(routes)],
  //     declarations: [AuthorsComponent, AuthorComponent, AppComponent]
  //   });

  //   router = TestBed.get(Router);
  //   location = TestBed.get(Location);

  //   fixture = TestBed.createComponent(AppComponent);

  //   router.initialNavigation();
  // });

  // // it('fakeAsync works', fakeAsync(() => {
  // //   let promise = new Promise(resolve => {
  // //     setTimeout(resolve, 10);
  // //   });
  // //   let done = false;
  // //   promise.then(() => (done = true));
  // //   tick(50);
  // //   expect(done).toBeTruthy();
  // // }));

  // it('navigate to "" redirects you to /home', fakeAsync(() => {
  //   router.navigate(['/authors']).then(() => {
  //     expect(location.path()).toBe('/authors');
  //   });

  // }));
});