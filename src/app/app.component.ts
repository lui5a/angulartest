import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Book } from './book.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){}
  ngOnInit(){}
  title = 'my-favorite-books';
}
