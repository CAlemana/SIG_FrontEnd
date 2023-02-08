import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router: Router) {}

  login(user: string, password: string){
    if (user == "admin" && password == "xxx") {
      this.router.navigate(['/settings']);
    }
    else {
      console.log("usuario no permitido")

    }
  }

  toSettings(){
    this.router.navigate(['/settings']);
  }
}
