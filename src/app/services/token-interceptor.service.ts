import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UserService} from './user.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private userService:UserService) { }

  intercept(req, next){
   const tokenizeReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.userService.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }
}
