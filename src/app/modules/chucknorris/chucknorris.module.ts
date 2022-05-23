import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChucknorrisRoutingModule } from './chucknorris-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { JokeComponent } from './joke/joke.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    JokeComponent
  ],
  imports: [
    CommonModule,
    ChucknorrisRoutingModule
  ]
})
export class ChucknorrisModule { }
