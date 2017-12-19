import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth/auth.service';
declare var $: any;
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor(private auth02: AuthService) { }

  ngOnInit() {
    $(document).ready(function()
    {
      var navItems = $('.admin-menu li > a');
      var navListItems = $('.admin-menu li');
      var allWells = $('.admin-content');
      var allWellsExceptFirst = $('.admin-content:not(:first)');
      allWellsExceptFirst.hide();
      navItems.click(function(e)
      {
          e.preventDefault();
          navListItems.removeClass('active');
          $(this).closest('li').addClass('active');
          allWells.hide();
          var target = $(this).attr('data-target-id');
          $('#' + target).show();
      });
      });
  }
}
