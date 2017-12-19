import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Product} from '../../tools/Product';
import 'rxjs/add/operator/map';
@Injectable()
export class PostService {
private _productURL = 'http://localhost:54843/api/products/';
  constructor(private _http: HttpClient) {}
  getProduct(): Observable<Product[]> {
    const products = this._http.get(this._productURL) as Observable<Product[]>;
    return  products;
  }
  getByID(a): Observable<Product> {
    let url = this._productURL+a
    return this._http.get<Product>(url);
  }
}
