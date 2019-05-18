import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Course-Project-Recipe-book-and-list';

  flagRecipeShoppingList : number = 1;

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAEBxNyOHNwesMW6n5NYkhFwOPFuwa9GB8',
      authDomain: 'recipebook-ae67d.firebaseapp.com'
    });
  }
  flagForRecipeOrShopping(val: number) {
    this.flagRecipeShoppingList = val;
  }
}
