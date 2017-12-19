import { AuthService } from './shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {PostService} from './shared/PostHttp/post.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private aut1: AuthService) {}
  ngOnInit() {
    $('#menu-toggle').click(function(e) {
      e.preventDefault();
      $('#wrapper').toggleClass('toggled');
    });
  }
}


