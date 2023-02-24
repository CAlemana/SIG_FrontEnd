import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { client_model } from 'src/app/models/client_model';
import { ClientService } from 'src/app/services/client_service/client-service';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent {
  age:number = 0;
  cedula:number = 0;
  name:string = '';
  lastname:string = '';
  gender:string = '';
  phone:number = 0;
  start_date:Date = new Date();
  end_date:Date = new Date();

  constructor(private router: Router, public clientService:ClientService){}

  setCedula(cedula:number){
    this.cedula = cedula;
  }

  setName(name:string){
    this.name = name;
  }

  setLastname(lastname:string){
    this.lastname = lastname;
  }

  setAge(age:number){
    this.age = age;
  }

  setGender(gender:string){
    this.gender = gender;
  }

  setPhone(phone:number){
    this.phone = phone;
  }

  setStartdate(event: { value: any; }){
    let start_date:Date = event.value;
    this.start_date = start_date;
  }

  setEnddate(event: { value: any; }){
    let end_date:Date = event.value;
    this.end_date = end_date;
  }

  postClientes(){
    let cliente: client_model = {cedula:this.cedula, name:this.name, lastname:this.lastname, age:this.age, gender:this.gender, phone:this.phone, start_date:this.start_date, end_date:this.end_date};
    this.clientService.addClient(cliente).subscribe(results => {
      this.reloadPage();
    }
      
    );
   }

   reloadPage(){
    //delay(2000);
    window.location.reload();
   }

}
