import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { imc_model } from 'src/app/models/imc_model';


@Injectable({
  providedIn: 'root'
})
export class ImcService {

  
  URL_IMC: string = "https://sig-api.onrender.com/api/imc/";
  
  constructor(private http: HttpClient) { }

  computeIMC(height:number, weight:number){
    let imc:number = weight / (weight*weight);
    return imc;
  }

  getIMC(): Observable<imc_model[]> {
    return this.http.get<imc_model[]>(this.URL_IMC);
  }

  addIMC(imc: imc_model): Observable<string> {
    return this.http.post<string>(this.URL_IMC, imc);
  }

  editIMC(imc: imc_model): Observable<imc_model>{
    return this.http.put<imc_model>(this.URL_IMC, imc);
  }

  deleteIMC(cedula: number): Observable<imc_model> {
    return this.http.delete<imc_model>(this.URL_IMC + cedula);
  }
}
