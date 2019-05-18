import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeService } from './recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']/*,
  providers: [RecipeService]*/ /*This instance will  be available to all child component. */
})
export class RecipesComponent implements OnInit,OnDestroy {

 /* private recipeDetails: Recipe;*/
  selectedRecipe: Recipe;
    selectedRecipeSubscription: Subscription;
  constructor(private recipeService: RecipeService) { }


  ngOnInit() {
    this.selectedRecipeSubscription = this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    );
  }

  /*onSelectedRecipe(recipe: Recipe) {

    this.recipeDetails = recipe;
  }*/

  ngOnDestroy(): void {
    this.selectedRecipeSubscription.unsubscribe();
  }
}
