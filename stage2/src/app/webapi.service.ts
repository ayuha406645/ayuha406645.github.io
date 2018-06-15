import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(
    private _http: HttpClient
  ) { }

  getService(url: string) {
    if (url != undefined) {
      return this._http.get(url);
    }
  }

  getArticleData(q?: string, limit?: string) {
    let url = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=1000';
    if (q) {
      url += '&q=' + q;
    }
    if (limit) {
      url += '&limit=' + limit;
    }
    return this.getService(url);
  }
}
