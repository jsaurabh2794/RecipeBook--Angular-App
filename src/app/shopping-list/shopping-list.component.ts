import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 // providers: [ShoppinglistService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[] = [];
  shoppingListSubscription: Subscription;
  constructor(private shoppingListSer: ShoppinglistService) {
    this.ingredients = this.shoppingListSer.getShoppingList();
  }

  ngOnInit() {

    this.shoppingListSubscription = this.shoppingListSer.changedIngredients.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
    console.log('In Main ' + this.ingredients.length);
  }
  ngOnDestroy(): void {
      this.shoppingListSubscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListSer.editedItemIndex.next(index);
  }
}
