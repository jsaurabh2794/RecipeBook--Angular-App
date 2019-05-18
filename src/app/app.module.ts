import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './core/header/header.component';
import { ShoppinglistService } from './shopping-list/shoppinglist.service';
import { AppRoutingModule } from './Routing-Module/app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { HttpModule } from '@angular/http';
import { Authservice } from './shared/authservice.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './core/home/home.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ShoppingListModule,
    CoreModule,
    HttpModule,
    SharedModule
  ],
  providers: [RecipeService, ShoppinglistService, DataStorageService, Authservice, AuthGuardService], /*Add here because this service will inject to other service*/
  bootstrap: [AppComponent]
})
export class AppModule { }
