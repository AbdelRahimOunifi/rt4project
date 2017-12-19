import { Component, OnInit } from '@angular/core';
import { Product } from '../../tools/Product';
import { PostService } from '../../shared/PostHttp/post.service';
import { CartService } from '../../shared/cart/cart.service';
import { AuthService } from '../../shared/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  e10: Product[];
  constructor(private service: PostService, private Cart: CartService, private auth2: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.service.getProduct().subscribe(data => {
      this.e10 = data;
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
