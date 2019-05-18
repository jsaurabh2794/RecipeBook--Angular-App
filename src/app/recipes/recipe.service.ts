import { Recipe } from './recipe-list/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shoppinglist.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable()
export  class RecipeService {

  /*selectedRecipe = new EventEmitter<Recipe>();*/
    selectedRecipe = new Subject<Recipe>();
    changedRecipes = new Subject<Recipe[]>();

  private recipes: Recipe[] = [new Recipe('A1 Test Recipe', 'Very Good Very Good', 'https://www.bbcgoodfood.com/sites/default/files/categories/categories-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',[new Ingredient('Meat',2), new Ingredient('Fries', 22)]), new Recipe('A2 Test Recipe', 'Very Good Bad', 'https://images.media-allrecipes.com/images/56589.png',[new Ingredient('Meat',2),new Ingredient('Fries', 23)]), new Recipe('A3 Test Recipe', 'Very gftrd Good Bad', 'http://www.foodfood.com/wp-content/uploads/2014/03/0001.jpg',[new Ingredient('Meat', 20),new Ingredient('Fries', 61)]),new Recipe('A4 Test Recipe', 'Very Good Bad', 'https://images.media-allrecipes.com/images/56589.png',[new Ingredient('Meat', 12), new Ingredient('Fries', 40)]),new Recipe('A5 Test Recipe', 'demo demo demo demo', 'https://www.bbcgoodfood.com/sites/default/files/categories/categories-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',[new Ingredient('Meat', 12), new Ingredient('Fries', 21)]),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.changedRecipes.next(this.recipes);
  }

  constructor(private shoppingList: ShoppinglistService, private router: Router) {}

  addIngredients(ing: Ingredient[]) {
    console.log('Recipe Ser: ' + ing[0].ingredientName + ing[0].ingredientAmount );
    this.shoppingList.addIngredients(ing);
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.changedRecipes.next(this.recipes);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    /*for (const i of newRecipe.ingredients) {
      console.log('in servie::' + i.ingredientName + '' + i.ingredientAmount);
    }*/
   /* console.log(newRecipe.recipeName + ''+ newRecipe.recipeDescription+''+ newRecipe.recipeImageUrl);*/
    this.changedRecipes.next(this.recipes);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.changedRecipes.next(this.recipes);
  }
}
