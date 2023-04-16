import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user_model } from 'src/app/models/user_model';
import { UserService } from 'src/app/services/user_service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users:user_model[] = [];
  username:string = '';
  password:string = '';

  constructor(private router: Router, private userService:UserService) {}

  ngOnInit(): void{
    this.userService.setStatusLogin('isLogin', 'false');
  }

  login(){
    this.users = [];
    let lista: user_model[] = [];
    this.userService.getUsers().subscribe ((data: user_model[]) => {
      lista = data;
      for (let user of lista) {
       
        if(user.username.toString() == this.username && user.pass.toString() == this.password){
          this.userService.setStatusLogin('isLogin', 'true');
          this.router.navigate(['/settings']);
          console.log("entra")
        }else{
          console.log("no entra") 
        }
      }   
    }); 
    
  }

  setUsername(username:string){
    this.username = username;
  }

  setPassword(password:string){
    this.password = password;
  }

}