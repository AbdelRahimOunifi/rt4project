import { Product } from './../../tools/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TypeService {
typeURL='http://localhost:54843/api/products/type/';
  constructor(private http: HttpClient) {
   }
   GetProdByType(type){
     let url=this.typeURL+type;
     return this.http.get<Product[]>(url);
   }
}
