import { Component, OnInit } from '@angular/core';
import { DocumentCollection } from 'ngx-jsonapi';
import { Author, AuthorsService } from '../authors.service';
import { defer } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.sass']
})
export class AuthorsComponent implements OnInit {
  public authors: DocumentCollection<Author>;
  public authorsList: Array<any>;

  public constructor(
    private authorsService: AuthorsService,
  ) {
    
  }

  async ngOnInit() {
      // debugger

      // defer(
      //   () => new Promise<any>((resolve, reject) => this.authorsService.all({
      //     include: ['books', 'photos']
      //   })
      //   .subscribe(authors => (resolve(authors)))
      // )). ; debugger

      this.authorsService.all({
        include: ['books', 'photos']
      })
      .subscribe(authors => (this.authors = authors));

      // this.authors = await this.authorsService.all({
      //   include: ['books', 'photos']
      // }).toPromise();
  }

}
