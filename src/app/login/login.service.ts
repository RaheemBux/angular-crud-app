import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthUser } from '../models/authuser';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'http://localhost:8080/testsapphire/auth';

  constructor(private httpCLient : HttpClient) { }

  auth(login : Login):Observable<AuthUser>{
    return this.httpCLient.post(`${this.baseURL}`,login);
  }
  loggedIn(){
    // it returns true or false when token is present or not
    return !!localStorage.getItem('token');
  }
  removeToken(){
    localStorage.removeItem('token');
  }
}
