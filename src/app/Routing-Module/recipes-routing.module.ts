import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component';
import { AuthGuardService } from '../shared/auth-guard.service';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';

const recipesRoutes: Routes =
  [
  {path: '', component: RecipesComponent,
    children: [
      {path: '', component: RecipeStartComponent},
      {path: 'recipe-edit', component: RecipeEditComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
      {path: ':id', component: RecipeDetailComponent},
      {path: 'recipe-edit/:id', component: RecipeEditComponent, pathMatch: 'full', canActivate: [AuthGuardService]}
      ]
  },
  ]
;

@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
