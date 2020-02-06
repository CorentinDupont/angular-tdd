import { Component, OnInit } from '@angular/core';
import { DocumentCollection } from 'ngx-jsonapi';
import { Author, AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.sass']
})
export class AuthorsComponent implements OnInit {
  public authors: DocumentCollection<Author>;

  public constructor(
    private authorsService: AuthorsService,
  ) {
    authorsService.all({
      include: ['books', 'photos']
    })
    .subscribe(authors => (this.authors = authors));
  }

  ngOnInit() {
  }

}
