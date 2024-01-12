import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../Models/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit{
  @Input() recipe: Recipe;
  constructor(private recipeService : RecipeService){ }

  ngOnInit() {
    
  }
  onSelected(recipe){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
