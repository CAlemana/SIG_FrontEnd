import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { client_model } from 'src/app/models/client_model';
import { ClientService } from 'src/app/services/client_service/client-service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  clients: client_model[] = [];
  displayedColumns: string[] = ['cedula', 'name', 'lastname', 'age', 'gender', 'phone', 'start_date', 'end_date', 'delete'];
  dataSource = this.clients;

  constructor(private router: Router, public clientService:ClientService){}

  ngOnInit(): void { 
    this.clients = [];
    let lista: client_model[] = [];
    this.clientService.getClients().subscribe ((data: client_model[]) => {
      lista = data;
      this.dataSource = data;
      for (let cliente of lista) {
        this.addToList(cliente);  
      }      
    });
  }


  addToList(cliente:client_model){
    this.clients.push(cliente);
  }

 deleteClient(cedula:number){
  let lista: client_model[] = [];

  this.clientService.deleteClient(cedula).subscribe(data =>{ 
  })

  this.clientService.getClients().subscribe ((data: client_model[]) => {
    lista = data;
    this.dataSource = data;
    
    for (let cliente of lista) {
      this.addToList(cliente);  
    }
    this.reloadPage();
  });
 }

 reloadPage(){
  //delay(20000);
  window.location.reload();
 }
   
}
