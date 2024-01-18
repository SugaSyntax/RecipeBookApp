import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit, OnDestroy{
ingredients: Ingredient[];
private subscription: Subscription;
constructor(private shoppinglistService: ShoppinglistService){}
ngOnInit() {
  this.ingredients = this.shoppinglistService.getIngredients();
  this.subscription = this.shoppinglistService.ingredientsChanges.subscribe(
    (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
}

ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
