import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  /*@Input() recipe: {recipeName: string, recipeDescription: string, recipeImageUrl: string};*/ /*Defining the type of object*/
/*Can do like this also*/
  @Input() recipe: Recipe;
  @Input() recipeId: number;


 /* @Output() recipeItemSelected = new EventEmitter<void>(); /!*pass void..because this component is inside ngif and we can easily get that object data;*!/*/
  constructor(private recipreService: RecipeService) { }

  ngOnInit() {

  }

  /*detailOfRecipe() {
   this.recipreService.selectedRecipe.emit(this.recipe);
  }*/
}
