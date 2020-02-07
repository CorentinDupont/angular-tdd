import { Component, OnInit } from '@angular/core';
import { Author, AuthorsService } from '../authors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.sass']
})
export class AuthorComponent implements OnInit {
  author: Author;
  id: string;
  constructor(
    private authorsService: AuthorsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(({id}) => this.id = id);

    debugger
    this.authorsService.get(this.id, {
      include: ['books', 'photos']
    })
    .subscribe(author => (this.author = author));

    debugger;
  }

}
