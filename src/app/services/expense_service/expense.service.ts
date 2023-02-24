import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { expense_model } from 'src/app/models/expense_model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  URL_gastos: string = "https://sig-api.onrender.com/api/expenses/";
  
  constructor(private http: HttpClient) { }

  getExpenses(): Observable<expense_model[]> {
    return this.http.get<expense_model[]>(this.URL_gastos);
  }

  addExpense(expense: expense_model): Observable<string> {
    return this.http.post<string>(this.URL_gastos, expense);
  }

  editExpense(expense: expense_model): Observable<expense_model>{
    return this.http.put<expense_model>(this.URL_gastos, expense);
  }

  deleteExpense(id: number): Observable<expense_model> {
    return this.http.delete<expense_model>(this.URL_gastos + id);
  }
}
