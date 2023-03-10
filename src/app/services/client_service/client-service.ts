import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client_model } from 'src/app/models/client_model';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  URL_clientes: string = "https://sig-api.onrender.com/api/clients/";
  
  
  constructor(private http: HttpClient) { }

  getClients(): Observable<client_model[]> {
    return this.http.get<client_model[]>(this.URL_clientes);
  }

  addClient(client: client_model): Observable<string> {
    return this.http.post<string>(this.URL_clientes, client);
  }

  editClient(client: client_model): Observable<client_model>{
    return this.http.put<client_model>(this.URL_clientes, client);
  }

  deleteClient(id: number): Observable<client_model> {
    return this.http.delete<client_model>(this.URL_clientes + id);

  }

}
