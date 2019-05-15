import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://ghibliapi.herokuapp.com/films';

  constructor(private _http: HttpClient) { }

  getBooks() {
    return this._http.get<Book[]>(this.apiUrl);
  }


}
