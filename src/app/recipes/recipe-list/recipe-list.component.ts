import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  recipeSubscription: Subscription;
 /*@Output() recipeWasSelected = new EventEmitter<Recipe>();*/
  constructor(private recipeService: RecipeService) { }


  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeSubscription = this.recipeService.changedRecipes.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  /*onSelectionOfRecipe(r: Recipe) {
    this.recipeWasSelected.emit(r);
  }*/
  ngOnDestroy(): void {
    this.recipeSubscription.unsubscribe();
  }
}
