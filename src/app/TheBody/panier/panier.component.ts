import { Product } from './../../tools/Product';
import { Component, OnInit } from '@angular/core';
import { FavorieService } from '../../shared/favorie/favorie.service';
import {NgForm} from '@angular/forms';
import { CartService } from '../../shared/cart/cart.service';
declare var $: any;
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  t: Product[];
  name1:number[]
 // total:number ;
  constructor(private fl : FavorieService, private ser: CartService) { }

  ngOnInit() {
    this.name1=[];
    this.fl.achat().subscribe(x =>{
      this.t=x;
      console.log(this.t);
    })
  }
  productprice(a,b){
    if(a && b){   
    return a*b;}
    else return 0;
  }
  delprod(id,i){
    this.ser.DelAchatCart(id).subscribe(x=>{
      console.log(x);
    });
    this.t.splice(i,1);
  }
}
