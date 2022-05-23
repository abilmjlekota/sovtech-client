import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseObject } from 'src/app/shared/ResponseObject';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ResponseObject> {
    return this.http.get<ResponseObject>(this.url + 'api/chuck');
  }

  getJokeByCategory(category: string): Observable<ResponseObject> {
    var uri = this.url + 'api/chuck/' + category;
    return this.http.get<ResponseObject>(uri);
  }
}
