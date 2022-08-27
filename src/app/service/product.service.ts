import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL: string = 'https://fakestoreapi.com/products';
  

  constructor(private _http: HttpClient) { }

  // get a product by id
  getProduct(id: number): Observable<Product> {
    return this._http.get<Product>(this.URL + `/${id}` );
  }

  getProducts(limit?: number): Observable<Product[]>{
      return this._http.get<Product[]>(this.URL + (limit ? `?limit${limit}` : ""));
  }
}
