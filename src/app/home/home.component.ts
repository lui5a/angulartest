import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books$: Book[];

  constructor(private dataService:DataService){}
  ngOnInit(){
    return this.dataService.getBooks()
      .subscribe(data => this.books$ = data);

  }
}
