import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit{
Ingredients: Ingredient[] = [
  new Ingredient('Apple', 5),
  new Ingredient('Tomoatoes', 10)
];
ngOnInit(): void {
  
}
onIngredientAdded(ingredient:Ingredient){
  this.Ingredients.push(ingredient);
  console.log(this.Ingredients);
}
}
