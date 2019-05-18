import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Http, Response} from '@angular/http';
import { Recipe } from '../recipes/recipe-list/recipe.model';
import { Authservice } from './authservice.service';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private recipeService: RecipeService, private authservice: Authservice)  {}

    onSaveRecipe() {
      const token = this.authservice.getToken();
      return this.http.put('https://recipebook-ae67d.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes());
    }

    getSavedRecipies() {
      const token = this.authservice.getToken();
      return this.http.get('https://recipebook-ae67d.firebaseio.com/recipe.json?auth=' + token)
        .subscribe((response: Response) => {
           const recipes: Recipe[] = response.json();
           this.recipeService.setRecipes(recipes);
        })
        ;
    }
}
