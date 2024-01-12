import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit{
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amtInput') amtInputRef: ElementRef;

  constructor(private shoppinglistService : ShoppinglistService){}

  ngOnInit(): void {
    
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmt = this.amtInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmt);
    this.shoppinglistService.addIngredient(newIngredient);
  }
}
