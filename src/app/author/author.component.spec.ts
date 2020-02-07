// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { AuthorComponent } from './author.component';
// import { NgxJsonapiModule } from 'ngx-jsonapi';
// import { By } from '@angular/platform-browser';

// describe('AuthorComponent', () => {
//   let component: AuthorComponent;
//   let fixture: ComponentFixture<AuthorComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ AuthorComponent ],
//       imports: [
//         NgxJsonapiModule,
//         NgxJsonapiModule.forRoot({
//           url: '//jsonapiplayground.reyesoft.com/v2/'
//         }),
//       ],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AuthorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // init author component with fake id param in route, and test if function is c`alled with this id

//   // show one author (test text in div with class 'name')
//   it('show name of the author', async () => {
//     debugger
//     await new Promise<any>((res, rej) => { setTimeout(res, 1000); });
//     fixture.detectChanges();
//     const authorName = fixture.debugElement.query(By.css('#name'));
//     debugger
//     expect(authorName.nativeElement.innerText.trim()).toBe('Raoul Bode I');
//   });

//   // show books list (count of div with class .book)
// });
