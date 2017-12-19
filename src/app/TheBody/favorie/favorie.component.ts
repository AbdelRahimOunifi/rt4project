import { Component, OnInit } from '@angular/core';
import { FavorieService } from '../../shared/favorie/favorie.service';
import { CartService } from '../../shared/cart/cart.service';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-favorie',
  templateUrl: './favorie.component.html',
  styleUrls: ['./favorie.component.css']
})
export class FavorieComponent implements OnInit {
t;
  constructor(private fl : FavorieService, private Cart: CartService, private auth2: AuthService, private ser: CartService) { }

  ngOnInit() {
    this.fl.favorie().subscribe(x =>{
      this.t=x;
      console.log(this.t);
    })
  }
  achat(productID){
    if(this.auth2.isLoggedIn()){
      let addachat = '{"productID":'+productID+',"userId":'+this.auth2.CurrentUser.ID+',"count":1,"productName":"achat"}';
      this.Cart.Addtocart(addachat).subscribe(
        data => {
          console.log(data);})
    }    
  }
  delprod(id,i){
    this.ser.DelFavorieCart(id).subscribe(x=>{
      console.log(x);
    });
    this.t.splice(i,1);
  }

}
