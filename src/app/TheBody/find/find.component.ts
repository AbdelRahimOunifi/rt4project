import { Component, OnInit } from '@angular/core';
import {PostService} from '../../shared/PostHttp/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FinderService } from '../../shared/finder/finder.service';
import { CartService } from '../../shared/cart/cart.service';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  myProducts;
  chaine;
  constructor( private service: FinderService, private _route: ActivatedRoute, private Cart: CartService, private auth2: AuthService,private router: Router) {
    this._route.params.subscribe(val => {
      this._route.paramMap.subscribe(
        params => {
          this.chaine = params.get('productName');
        });
        console.log(this.chaine);
      this.service.GetProdBySearch(this.chaine).subscribe(data=>{
        this.myProducts=data;
      });  
    
    });
   }

  ngOnInit() {
    this._route.paramMap.subscribe(
      params => {
        this.chaine = params.get('productName');
      });
      console.log(this.chaine);
    this.service.GetProdBySearch(this.chaine).subscribe(data=>{
      this.myProducts=data;
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
