import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShoppinglistService } from '../shoppinglist.service';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  ingName ;
  ingAmount ;
  subscriptionForEditedItemIndex: Subscription;
  editedItem: Ingredient;
  @ViewChild('myForm') ingredientForm: NgForm;
  editMode = false;
  indexOfItemToUpdate: number;

  /* @Output() Ingredient = new EventEmitter<Ingredient>();
  @Output() IngredientDelete = new EventEmitter<void>();*/


  constructor(private shoppingListSer: ShoppinglistService) {
    this.ingName = '';
    this.ingAmount = 0;
  }

  ngOnInit() {
    this.subscriptionForEditedItemIndex = this.shoppingListSer.editedItemIndex.subscribe((index: number) => {

       this.editMode = true;
       this.indexOfItemToUpdate = index;
       this.editedItem = this.shoppingListSer.getIngredientById(index);
       this.ingredientForm.setValue({
         ingName: this.editedItem.ingredientName,
         ingAmount: this.editedItem.ingredientAmount
        });
       this.ingName =   this.editedItem.ingredientName;
       this.ingAmount =   this.editedItem.ingredientAmount;

    });
  }

  ngOnDestroy(): void {
    this.subscriptionForEditedItemIndex.unsubscribe();
  }

  /*toAddShoppingList() {
    console.log(this.ingName + ',' + this.ingAmount);
    this.shoppingListSer.addIngredient(new Ingredient(this.ingName, this.ingAmount));
    // this.Ingredient.emit(new Ingredient(this.ingName, this.ingAmount));
  }*/

  toDeleteShoppingList() {
     this.shoppingListSer.deleteListById(this.indexOfItemToUpdate);
     this.onClear();
  }

  onAddItem(myForm: NgForm) {
   const item = myForm.form.value;
   if ( this.editMode === false) {
     this.shoppingListSer.addIngredient(new Ingredient(item.ingName, item.ingAmount));
   } else {
     this.shoppingListSer.updateIngredientById(this.indexOfItemToUpdate, new Ingredient(item.ingName, item.ingAmount));
   }
   this.editMode = false;
   myForm.reset();
   this.ingName = '';
   this.ingAmount = '';
  }

  onClear() {
      this.ingredientForm.reset();
      this.editMode = false;
      this.ingName = '';
      this.ingAmount = '';
  }
}
