import { Component, OnInit } from '@angular/core';
import {PostService} from '../../shared/PostHttp/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import {Product} from '../../tools/Product';
@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {
  e10: Product;
  id;
  constructor(private service: PostService, private _route: ActivatedRoute, private _router: Router) {
  }
  ngOnInit() {
    this._route.paramMap.subscribe(
      params => {
        this.id = +params.get('productID');
      });
      this.service.getByID(this.id).subscribe( data => {
        this.e10 = data ;
      } );
    }

  onBack(): void {
    this._router.navigate(['/products']);
  }
}
