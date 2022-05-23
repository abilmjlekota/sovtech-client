import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChucknorrisService } from '../chucknorris.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  error: string = '';
  isError: boolean = false;

  categories: string[] = [];

  constructor(private server: ChucknorrisService, private route: Router) { }

  ngOnInit(): void {
    this.server.getCategories().subscribe(x => {
      if(x.success) {
        this.categories = x.obj;
      } else {
        this.error = x.message;
        this.isError = true;
        
      }
    })
  }

  onCategorySelected(category: string): void {
    console.log(category);
    this.route.navigate(['joke'], { queryParams: {category: category} });
    
  }

}
