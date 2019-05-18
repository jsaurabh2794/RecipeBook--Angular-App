import { Ingredient } from '../../shared/ingredient.model';

export class Recipe {
  public recipeName : string;
  public recipeDescription : string;
  public recipeImageUrl : string;
  public ingredients: Ingredient[];


  constructor(recipeName: string, recipeDescription: string, recipeImageUrl: string, ingredients: Ingredient[]) {
    this.recipeName = recipeName;
    this.recipeDescription = recipeDescription;
    this.recipeImageUrl = recipeImageUrl;
    this.ingredients = ingredients;
  }


  /*get recipeName(): string {
    return this._recipeName;
  }

  set recipeName(value: string) {
    this._recipeName = value;
  }

  get recipeDescription(): string {
    return this._recipeDescription;
  }

  set recipeDescription(value: string) {
    this._recipeDescription = value;
  }

  get recipeImageUrl(): string {
    return this._recipeImageUrl;
  }

  set recipeImageUrl(value: string) {
    this._recipeImageUrl = value;
  }


  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  set ingredients(value: Ingredient[]) {
    this._ingredients = value;
  }*/
}
