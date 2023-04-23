import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { client_model } from 'src/app/models/client_model';
import { ClientService } from 'src/app/services/client_service/client-service';
import { ImcService } from 'src/app/services/imc_service/imc.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent {
  clients: client_model[] = [];
  //clients: string[] = ['One', 'Two', 'Three'];

  genders: string[] = ["Masculino", "Femenino", "LGTBIQA+"];

  age:number = 0;
  cedula:number = 0;
  name:string = '';
  height:number = 0;
  weight:number = 0;
  lastname:string = '';
  gender:string = '';
  phone:number = 0;
  start_date:string = '';
  end_date:string = '';
  imc:number = 0;

  startDate:Date = new Date();
  endDate:Date = new Date();

  constructor(private router: Router, private clientService:ClientService, private imcService:ImcService){}

  ngOnInit(): void { 
    this.clients = [];
    let lista: client_model[] = [];
    this.clientService.getClients().subscribe ((data: client_model[]) => {
      lista = data;
      for (let cliente of lista) {
        this.addToList(cliente);  
      }      
    });
  }


  addToList(cliente:client_model){
    this.clients.push(cliente);
  }
  
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

  setHeight(height:number){
    this.height = height;
  }

  setWeight(weight:number){
    this.weight = weight;
  }

  setStartdate(event: { value: any; }){
    let start_date:Date = event.value;
    const day = start_date.getDate().toString().padStart(2, '0'); // obtiene el día y lo convierte en una cadena con cero a la izquierda si es necesario
    const month = (start_date.getMonth() + 1).toString().padStart(2, '0'); // obtiene el mes y lo convierte en una cadena con cero a la izquierda si es necesario (agrega 1 porque los meses en JavaScript comienzan en 0)
    const year = start_date.getFullYear().toString(); // obtiene el año como cadena
    const formattedDate = `${month}/${day}/${year}`; // une el día, el mes y el año en el formato dd/mm/yyyy
    this.start_date = formattedDate;
  }

  setEnddate(event: { value: any; }){
    let end_date:Date = event.value;
    const day = end_date.getDate().toString().padStart(2, '0'); // obtiene el día y lo convierte en una cadena con cero a la izquierda si es necesario
    const month = (end_date.getMonth() + 1).toString().padStart(2, '0'); // obtiene el mes y lo convierte en una cadena con cero a la izquierda si es necesario (agrega 1 porque los meses en JavaScript comienzan en 0)
    const year = end_date.getFullYear().toString(); // obtiene el año como cadena
    const formattedDate = `${month}/${day}/${year}`; // une el día, el mes y el año en el formato dd/mm/yyyy
    this.end_date = formattedDate;
  }

  selectClient(cedula:number){
    
    for (let cliente of this.clients) {
      if (cedula == cliente.cedula){
        this.age = cliente.age;
        this.cedula = cliente.cedula;
        this.name = cliente.name;
        this.height = cliente.height;
        this.weight = cliente.weight;
        this.lastname = cliente.lastname;
        this.gender = cliente.gender;
        this.phone = cliente.phone;
        this.start_date = cliente.start_date;
        this.end_date = cliente.end_date;
        this.imc = cliente.imc;

        this.startDate = new Date(cliente.start_date);
        this.endDate = new Date(cliente.end_date);
      }  
    }  
  }

   updateClients(){
    this.imc = this.imcService.computeIMC(this.height, this.weight);
    let cliente: client_model = {cedula:this.cedula, name:this.name, lastname:this.lastname, age:this.age, gender:this.gender, height:this.height, weight:this.weight, phone:this.phone, start_date:this.start_date, end_date:this.end_date, imc:parseFloat(this.imc.toFixed(3))};
   
    this.clientService.editClient(cliente).subscribe(results => {
      this.reloadPage();
      }
    );
    //this.reloadPage();
   }
   
   reloadPage(){
    //delay(2000);
    window.location.reload();
   }

}