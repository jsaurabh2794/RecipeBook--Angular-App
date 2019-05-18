import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetails: Recipe;
  id: number;
  toggleval = false;
  constructor(private recipe: RecipeService, private route: ActivatedRoute, private  router: Router) { }

  ngOnInit() {

    this.route.params.subscribe((param: Params) => {
     this.id = param.id;
     this.recipeDetails = this.recipe.getRecipe(this.id);
    });
  }

  toAddIntoShoppingList() {
    /*for (let i = 0; i < this.recipeDetails.ingredients.length; i++) {
      this.shoppingListSer.addIngredient(this.recipeDetails.ingredients[i]);*/
    this.recipe.addIngredients(this.recipeDetails.ingredients);
    }

  onEdit() {
   this.router.navigate(['../recipe-edit', this.id], {relativeTo: this.route});
  }

  onDelete() {
    this.recipe.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);

  }
}

