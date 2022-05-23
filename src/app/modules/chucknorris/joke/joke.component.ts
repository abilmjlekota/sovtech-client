import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChucknorrisService } from '../chucknorris.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  category: string = '';

  error: string = '';
  isError: boolean = false;

  joke: any = null;

  constructor(private route: ActivatedRoute, private server: ChucknorrisService, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
    });

    this.server.getJokeByCategory(this.category).subscribe( res => {
      if (res.success) {
        this.joke = res.obj;
      } else {
        this.error = res.message;
        this.isError = true;
        
      }
    })
  }

  onBack(): void {
    this.router.navigate(['category'])
  }

}
