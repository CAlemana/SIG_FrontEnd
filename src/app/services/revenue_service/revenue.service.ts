import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { revenue_model } from 'src/app/models/revenue_model';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {

  URL_ingresos: string = "https://sig-api.onrender.com/api/revenues/"; 
   // URL_ingresos: string = "http://localhost:3000/api/revenues/";

  constructor(private http: HttpClient) { }

  getRevenues(): Observable<revenue_model[]> {
    return this.http.get<revenue_model[]>(this.URL_ingresos);
  }

  addRevenue(revenue: revenue_model): Observable<string> {
    return this.http.post<string>(this.URL_ingresos, revenue);
  }

  editRevenue(revenue: revenue_model): Observable<revenue_model>{
    return this.http.put<revenue_model>(this.URL_ingresos, revenue);
  }

  deleteRevenue(id: number): Observable<revenue_model> {
    return this.http.delete<revenue_model>(this.URL_ingresos + id);
  }
}
