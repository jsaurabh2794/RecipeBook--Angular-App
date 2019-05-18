import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppinglistService {
   private ingredients: Ingredient[] = [];

  // changedIngredients = new EventEmitter<Ingredient[]>();
  changedIngredients = new Subject<Ingredient[]>();
  editedItemIndex = new Subject<number>();
    constructor() {
    const ing1: Ingredient = new Ingredient('Apples',5);
    const ing2: Ingredient = new Ingredient('Tomatos',6);
    this.ingredients.push(ing1);
    this.ingredients.push(ing2);
  }

  getShoppingList() {
      return this.ingredients.slice(); /*makes copy of array...so when you add in original itis not updated in copy...so soltn is to remove slice or emit the event*/
  }

  addIngredient(ingredient: Ingredient) {
    console.log('In service' + ingredient.ingredientName);
    this.ingredients.push(ingredient);
    // this.changedIngredients.emit(this.ingredients);
    this.changedIngredients.next(this.ingredients);
  }

  deleteListById(index: number) {
    this.ingredients.splice(index, 1);
    this.changedIngredients.next(this.ingredients);
  }

  getIngredientById(index: number) {
      return this.ingredients[index];
  }

  updateIngredientById(index: number, Ing: Ingredient) {
    this.ingredients[index].ingredientName = Ing.ingredientName;
    this.ingredients[index].ingredientAmount = Ing.ingredientAmount;
    this.changedIngredients.next(this.ingredients);
  }
  addIngredients(ingredients: Ingredient[]) {
      /*for ( const i of ingredients) {
        this.addIngredient(i);
      }*/

      this.ingredients.push(...ingredients);
     // this.changedIngredients.emit(this.ingredients);
      this.changedIngredients.next(this.ingredients);

  }

}
