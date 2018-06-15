import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  article_data: Array<any>;
  article_data_total: Number;

  constructor() { }
}
