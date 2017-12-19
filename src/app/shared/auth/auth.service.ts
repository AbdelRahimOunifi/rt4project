import { IToken } from './../../tools/Itoken';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthService {
  private customersUrl = 'http://localhost:54843/api/itoken';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  login(credentials){
    return this.http.post<IToken>(this.customersUrl, JSON.stringify(credentials), {headers: this.headers})
  }
  logout() { 
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    let jwtHelper= new JwtHelper(); 
    let token= localStorage.getItem('token');
    if(!token){
      return false;
    }
    let expdate= jwtHelper.getTokenExpirationDate(token);
    let isExpired= jwtHelper.isTokenExpired(token);
    if (isExpired){
      localStorage.removeItem('token');
      return false;
    }
    return !isExpired;
  }
  get CurrentUser(){
    let token =localStorage.getItem('token');
    if (!token) return null;
    return new JwtHelper().decodeToken(token);
  }
  getToken(){
    if(this.isLoggedIn()){
      return localStorage.getItem('token');
    }
    else{
      return '';
    }
  }
  isAdministrator(){
    if(this.isLoggedIn()){
    if(this.CurrentUser.Privilege =="admin"){
      return true;
    }
    else{
      return false;
    }
    }
    else{
      return false;
    }
  }

}
