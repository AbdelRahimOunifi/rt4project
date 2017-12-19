import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../tools/Product';

@Injectable()
export class FinderService {
  typeURL='http://localhost:54843/api/Products/search/';
  constructor(private http: HttpClient) {
   }
   GetProdBySearch(chaine){
     let url=this.typeURL+chaine;
     return this.http.get<Product[]>(url);
   }
}
