import { IdfilterPipe } from './../idfilter/idfilter.pipe';
import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
private cartURL ='http://localhost:54843/api/carts';
private CarDeltAURL ='http://localhost:54843/api/carts/delatea/';
private CarDeltFURL ='http://localhost:54843/api/carts/delatef/';
private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient, private auth: AuthService) { }
  Addtocart(listP){
    console.log('***'+listP+'***');
    let head= this.auth.getToken();
    let Newheaders =new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+head});
    return this.http.post<string>(this.cartURL, listP, {headers: Newheaders});
  }
  DelAchatCart(listP){
    console.log('listP '+listP)
    let u=this.auth.CurrentUser.ID;
    let url=this.CarDeltAURL+u+'/'+listP;
    console.log('URL is '+url);
    let head= this.auth.getToken();
    let Newheaders =new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+head});
    return this.http.delete(url,{headers: Newheaders});
  }
  DelFavorieCart(listP){
    console.log('listP '+listP)
    let u=this.auth.CurrentUser.ID;
    let url=this.CarDeltFURL+u+'/'+listP;
    console.log('URL is '+url);
    let head= this.auth.getToken();
    let Newheaders =new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+head});
    return this.http.delete(url,{headers: Newheaders});
  }
}