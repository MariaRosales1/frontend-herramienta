import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../shared/user.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI = 'http://localhost:3000/user';
  role:String;

  constructor(private http: HttpClient, private router:Router) { }

  registerUser(user:User) {
    this.role = user.role;
    return this.http.post(`${this.API_URI}/signup`, user);
  }

  signin(email:string, password:string){
    let credentials = {"email": email, "password":password};
    console.log(credentials);
    return this.http.post(`${this.API_URI}/signin`, credentials);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
