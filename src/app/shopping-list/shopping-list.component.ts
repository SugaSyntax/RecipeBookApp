import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{
ingredients: Ingredient[];
constructor(private shoppinglistService: ShoppinglistService){}
ngOnInit() {
  this.ingredients = this.shoppinglistService.getIngredients();
  this.shoppinglistService.ingredientsChanges.subscribe(
    (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
}
}
