import { Component} from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { Authservice } from '../../shared/authservice.service';

@Component({
  selector : 'app-header',
  templateUrl : './header.component.html',
  styleUrls : ['./header.component.css']
})
export class HeaderComponent {


  /*@Output() recipeOrShoppingList  = new EventEmitter<number>();
  recipeOrShoppingListSelector(val: number) {
    this.recipeOrShoppingList.emit(val);
  }*/
   constructor( private dataStorageService: DataStorageService, public authservice: Authservice)  {}
  onSave() {
    this.dataStorageService.onSaveRecipe()
      .subscribe((response: Response) => {
        console.log(response);
      });
  }

  onFetch() {
   this.dataStorageService.getSavedRecipies();
   // this.recipeSer.setRecipes();
   }

  onLogout() {
    this.authservice.onLogout();
  }
}
