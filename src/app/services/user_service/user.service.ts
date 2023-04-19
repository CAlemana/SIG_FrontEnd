import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user_model } from 'src/app/models/user_model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    URL_usuarios: string = "https://sig-api.onrender.com/api/users/"; 
   // URL_usuarios: string = "http://localhost:3000/api/users/";
  
  constructor(private http: HttpClient) { }


  getUsers(): Observable<user_model[]> {
    return this.http.get<user_model[]>(this.URL_usuarios);
  }

  
  setStatusLogin(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  getStatusLogin(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeDato(key: string) {
    localStorage.removeItem(key);
  }
  
  limpiarLocalStorage() {
    localStorage.clear();
  }
}