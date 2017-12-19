import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {
  private customersUrl = 'http://localhost:54843/api/users';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  singup(parametre){
    return this.http.post(this.customersUrl,JSON.stringify(parametre), {headers: this.headers})
  }
}
