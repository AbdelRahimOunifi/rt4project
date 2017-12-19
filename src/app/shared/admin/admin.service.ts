import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Icard } from '../../tools/Icard';
import { Iuser } from '../../tools/Iuser';

@Injectable()
export class AdminService {
url1='http://localhost:54843/api/carts';
url2='http://localhost:54843/api/users';
  constructor(private http: HttpClient, private auth: AuthService) { }
  getallusers(){
    let head= this.auth.getToken();
    let Newheaders =new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+head});
    let u=this.http.get<Iuser[]>(this.url2,{headers: Newheaders});
    console.log(u);
    return u;
  }
  getallcards(){
    let head= this.auth.getToken();
    let Newheaders =new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer '+head});
    let u=this.http.get<Icard[]>(this.url1,{headers: Newheaders});
    console.log(u);
    return u
  }
}
