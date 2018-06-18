import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  name: String;
  opentime: String;
  ticketinfo: String;
  add: String;
  changetime: String;
  description: String;

  constructor() { }

  ngOnInit() {
  }

}
