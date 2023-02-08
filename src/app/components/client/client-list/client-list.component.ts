import { Component } from '@angular/core';
import { client_model } from 'src/app/models/client_model';
import { ClientService } from 'src/app/services/client_service/client-service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  clients: client_model[] = [];
  displayedColumns: string[] = ['cedula', 'name', 'lastname', 'age', 'gender', 'phone', 'start_date', 'end_date'];
  dataSource = this.clients;

  constructor(public clientService:ClientService){}

  ngOnInit(): void {
    this.clients = [];
    let lista: client_model[] = [];
    this.clientService.getClients().subscribe ((data: client_model[]) => {
      lista = data as client_model[]
      for (let cliente of lista) {
        this.clients.push(cliente);
      }
      console.log(this.clients)
    });
  }
  /*
  getClientes() {
    this.clients = [];
    let lista: client_model[] = [];
    this.clientService.getClients().subscribe ((data: client_model[]) => {
      lista = data
      for (let cliente of lista) {
        this.clients.push(cliente);
      }
      //console.log(this.clients)
    });
   }  
*/
   
}
