import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : Login = new Login();
  
  isValidCredentials: boolean = true;

  constructor(private loginService : LoginService,private router : Router) { }

  ngOnInit(): void {
    this.loginService.removeToken();
  }
  
  onSubmit(){
    this.loginService.auth(this.login).subscribe(response=>{
      if(response){
        localStorage.setItem('token',response.token);
        this.router.navigate(['/home']);
      }
    },
    (error)=>{
      this.isValidCredentials = false; 
    })
  }

}
