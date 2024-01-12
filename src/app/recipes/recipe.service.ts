import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './Models/recipe.model'
import { ShoppinglistService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe','Testing the test recipe','data:image/jpeg;base64,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',
        [
            new Ingredient('Test', 1)
        ]),
        new Recipe('Tiramisu','Creamy, espresso-kissed, indulgent, layered, heavenly','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKLImZuPx2FMG2E8M1kSIUTLqnpE8Wn0EBg&usqp=CAU', 
        [
            new Ingredient('Egg', 4),
            new Ingredient('Lady Fingers', 12)
        ])
      ];

      constructor(private shoppingListService: ShoppinglistService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}