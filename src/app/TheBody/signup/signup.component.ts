import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/Account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private Account: AccountService, private router: Router) { }

  ngOnInit() {
  }
  register(param){
    let str={"userName":param.name,"userLName":param.username,"userPassword":param.password,"eMail": param.email,"privilege":"User"};
    console.log(str);
    this.Account.singup(str).subscribe(data=>{
      console.log(data)
      this.router.navigate(["/logging"]);
    }
    );
  }

}
