import { Component, OnInit } from '@angular/core';
import {PostService} from '../../shared/PostHttp/post.service';
import { TypeService } from '../../shared/type/type.service';
import { CartService } from '../../shared/cart/cart.service';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.css']
})
export class PcComponent implements OnInit {
  e10;
  type;
   constructor(private service1: TypeService, private Cart: CartService, private auth2: AuthService, private router: Router) { }
 
   ngOnInit() {
     this.service1.GetProdByType('laptop').subscribe(data =>{
       this.e10 = data ;  
     });
    }
    achat(productID){
      if(this.auth2.isLoggedIn()){
        let addachat = '{"productID":'+productID+',"userId":'+this.auth2.CurrentUser.ID+',"count":1,"productName":"achat"}';
        this.Cart.Addtocart(addachat).subscribe(
          data => {
            console.log(data);})
      }
      else{
        this.router.navigate(["/logging"]);
      }
    }
    favorie(productID){
      if(this.auth2.isLoggedIn()){
        let addachat = '{"productID":'+productID+',"userId":'+this.auth2.CurrentUser.ID+',"count":1,"productName":"favorie"}';
        this.Cart.Addtocart(addachat).subscribe(
          data => {
            console.log(data);})
      }
      else{
        this.router.navigate(["/logging"]);
      }    
    }  
}
