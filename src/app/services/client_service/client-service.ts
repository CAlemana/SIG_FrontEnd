import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client_model } from 'src/app/models/client_model';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

   
   URL_clientes: string = "https://sig-api.onrender.com/api/clients/";
   // URL_clientes: string = "http://localhost:3000/api/clients/"; 
  
  constructor(private http: HttpClient) { }

  getClients(): Observable<client_model[]> {
    return this.http.get<client_model[]>(this.URL_clientes);
  }

  addClient(client: client_model): Observable<string> {
    return this.http.post<string>(this.URL_clientes, client);
  }

  editClient(client: client_model): Observable<string>{
    console.log(client)
    return this.http.put<string>(this.URL_clientes+client.cedula, {name:client.name, lastname:client.lastname, age:client.age, gender:client.gender, height:client.height, weight:client.weight, phone:client.phone, start_date:client.start_date, end_date:client.end_date, imc:client.imc});
  }

  deleteClient(id: number): Observable<client_model> {
    return this.http.delete<client_model>(this.URL_clientes + id);

  }

}
