import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  editedId: number;
  editedMode =  false;
  recipeEditForm: FormGroup;
  selectedRecipeToEdit: Recipe;
  recipeName = '';
  recipeImagePath = '';
  recipeDesc = '';
  recipeIngredientsArray = new FormArray([]);
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((parameter: Params) => {
      this.editedId = +parameter['id'];
      if(this.editedId >= 0 )  {
        this.editedMode = true;
        this.selectedRecipeToEdit = this.recipeService.getRecipe(this.editedId);
      }
    });
    this.onLoadInit();
  }

    onLoadInit() {
      if (this.editedMode) {
        this.recipeName = this.selectedRecipeToEdit.recipeName;
        this.recipeImagePath = this.selectedRecipeToEdit.recipeImageUrl;
        this.recipeDesc = this.selectedRecipeToEdit.recipeDescription;
        if (this.selectedRecipeToEdit.ingredients.length > 0) {
          for (const ing of this.selectedRecipeToEdit.ingredients) {
            this.recipeIngredientsArray.push( new FormGroup({
              ingredientName: new FormControl(ing.ingredientName, Validators.required),
              ingredientAmount: new FormControl(ing.ingredientAmount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            }));
          }
        }
      }

      this.recipeEditForm = new FormGroup({
       name: new FormControl(this.recipeName, Validators.required),
       imageUrl: new FormControl(this.recipeImagePath, Validators.required),
       description: new FormControl(this.recipeDesc, Validators.required),
       ingredients: this.recipeIngredientsArray
      });
    }

  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeEditForm.value.name,
      this.recipeEditForm.value.description,
      this.recipeEditForm.value.imageUrl,
      this.recipeEditForm.value.ingredients);
    if (this.editedMode) {
        this.recipeService.updateRecipe(this.editedId, newRecipe);
    } else {
         this.recipeService.addRecipe(newRecipe);
     }
    this.onCancel();
  }

  getControls() {
    return (this.recipeEditForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient() {
    (<FormArray> this.recipeEditForm.get('ingredients')).push(new FormGroup({
      ingredientName: new FormControl(null, Validators.required),
      ingredientAmount: new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }


  onCancel() {
    if (this.editedId) {
      this.router.navigate(['/recipes', this.editedId]);
    } else {
      this.router.navigate(['/recipes']);
    }
  }

  onDeleteIngredient(index: number) {
    (this.recipeEditForm.get('ingredients') as FormArray).removeAt(index);
  }
}
