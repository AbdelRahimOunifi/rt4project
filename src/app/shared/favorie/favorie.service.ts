import { AuthService } from './../auth/auth.service';
import { Product } from './../../tools/Product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class FavorieService {
favorieURL= 'http://localhost:54843/api/carts/favorie/';
achatURL= 'http://localhost:54843/api/carts/achats/';
  constructor(private http : HttpClient, private auth3 : AuthService) { }
  favorie(){
    let url= this.favorieURL + this.auth3.CurrentUser.ID;
    let head= this.auth3.getToken();
    let Newheaders =new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+head});
    return this.http.get<Product[]>(url, {headers: Newheaders});
  }
  achat(){
    let url= this.achatURL + this.auth3.CurrentUser.ID;
    let head= this.auth3.getToken();
    let Newheaders =new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+head});
    return this.http.get<Product[]>(url, {headers: Newheaders});
  }
}
