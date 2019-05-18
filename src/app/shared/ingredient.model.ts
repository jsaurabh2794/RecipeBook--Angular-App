export  class Ingredient {

  public ingredientName : string;
  public ingredientAmount : number;


  constructor(ingredientName: string, ingredientAmount: number) {
    this.ingredientName = ingredientName;
    this.ingredientAmount = ingredientAmount;
  }


  /*get ingredientName(): string {
    return this._ingredientName;
  }

  set ingredientName(value: string) {
    this._ingredientName = value;
  }

  get ingredientAmount(): number {
    return this._ingredientAmount;
  }

  set ingredientAmount(value: number) {
    this._ingredientAmount = value;
  }*/
}
