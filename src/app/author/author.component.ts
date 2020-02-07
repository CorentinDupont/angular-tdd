import { Component, OnInit } from '@angular/core';
import { Author, AuthorsService } from '../authors.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.sass']
})
export class AuthorComponent implements OnInit {
author: Author;
  constructor(private authorsService: AuthorsService ) { }

  ngOnInit() {

    this.authorsService.get('1', {
      include: ['books', 'photos']
    })
    .subscribe(author => (this.author = author));

    debugger;
  }

}
