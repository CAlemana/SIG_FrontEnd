import { Component } from '@angular/core';
import { client_model } from 'src/app/models/client_model';
import { ClientService } from 'src/app/services/client_service/client-service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  clientes: client_model[] = [];
  constructor(public clientService:ClientService){

  }

  prueba() {
    let lista: client_model[] = [];
    this.clientService.getClients().subscribe ((data: client_model[]) => {
      lista = data
      for (let cliente of lista) {
        this.clientes.push(cliente);
      }
      console.log(this.clientes)
      
    });

   }
   
}
