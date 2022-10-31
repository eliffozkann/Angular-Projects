import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
}) //Attribute
export class CategoriesService {
  controllerUrl = `${environment.apiUrl}/categories`;
  //private httpClient: HttpClient;
 // getCategoriesResponse:Object ={};

  constructor(private httpClient: HttpClient) { 
    //this.httpClient = httpClient; //bunu ve üstekini yorum satırına aldım çünkü ikisinin birlikte yaptığı işlemi constracter parantezi içine private yazarak her iki işlemi de yapar
  }

  //generic / jeneric beraber class lara ve metotlara üzerinde çalışacak bir tip geçebiliriz
  getCategories(): Observable<Category[]> {
    // get metodu GET http isteğini hazırlar
    return this.httpClient.get<Category[]>(this.controllerUrl);
    // .subscribe((response:Object) => {
    //   console.log(response);
    // }) //bekleyip dinlemek için subscribe kullandk 
    
    /*
    GET http://localhost:3000/categories
    */
  }

  add(category: Category): Observable<void>{
    return this.httpClient.post<void>(this.controllerUrl, category); 
  }

  update(category:Category): Observable<Category> {
    return this.httpClient.put<Category>(`${this.controllerUrl}/${category.id}`, category);
  }

  delete (id:number): Observable<void> {
    return this.httpClient.delete<void>(`${this.controllerUrl}/${id}`);
  }
}

