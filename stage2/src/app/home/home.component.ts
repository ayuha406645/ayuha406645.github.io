import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";
import { WebapiService } from "../webapi.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  article_datas: Array<any>;
  total: Number;

  constructor(
    private _shared: SharedService,
    private _webapi: WebapiService
  ) { }

  ngOnInit() {
    if (!this._shared.article_data) {
      this._webapi.getArticleData().subscribe(data => {
        this._shared.article_data = this.article_datas = data['result'].records;
        this._shared.article_data_total = this.total = data['result'].total;
      });
    } else {
      this.article_datas = this._shared.article_data;
      this.total = this._shared.article_data_total;
    }
  }

}