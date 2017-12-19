import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AuthService } from '../../shared/auth/auth.service';
@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
  invalidlogin: boolean;
  constructor( private router: Router,private auth: AuthService) { }

  ngOnInit() {
  }
  signIn(a){
    let q = 
    this.auth.login(a).subscribe(
      data => {
        if (data.status=='success')
        {
          localStorage.setItem('token', data.token);
          this.router.navigate(['/']);
        
        }
        else
        {
          console.log("returning false");
          this.invalidlogin = true;
        }
      });
  }
  
}
