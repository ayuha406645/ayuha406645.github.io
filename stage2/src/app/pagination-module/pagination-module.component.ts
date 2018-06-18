import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-module',
  templateUrl: './pagination-module.component.html',
  styleUrls: ['./pagination-module.component.scss']
})
export class PaginationModuleComponent implements OnInit {

  @Input() total: number;
  
  @Input() limit: number;

  @Input() currentPage: number;

  totalPage: number;

  constructor() {
    this.limit = 10;
    this.currentPage = 1;
  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    if (this.total !== undefined) {
      this.totalPage = Math.ceil(this.total / this.limit);
      console.log(this.totalPage);
    }
  }

}
