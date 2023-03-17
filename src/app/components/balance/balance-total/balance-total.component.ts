import { Component } from '@angular/core';
import { expense_model } from 'src/app/models/expense_model';
import { revenue_model } from 'src/app/models/revenue_model';
import { ExpenseService } from 'src/app/services/expense_service/expense.service';
import { RevenueService } from 'src/app/services/revenue_service/revenue.service';


@Component({
  selector: 'app-balance-total',
  templateUrl: './balance-total.component.html',
  styleUrls: ['./balance-total.component.css']
})
export class BalanceTotalComponent {
  expenses: expense_model[] = [];
  revenues: revenue_model[] = [];
  yearsOn: string[] = [];
  

  constructor(private expenseService:ExpenseService, private revenueService:RevenueService){}

  ngOnInit(): void { 
    this.expenses = [];
    let listaE: expense_model[] = [];
    this.expenseService.getExpenses().subscribe ((data: expense_model[]) => {
      listaE = data;
      for (let revenue of listaE) {
        this.addToListE(revenue);  
      }   

    });

    this.revenues = [];
    let listaR: revenue_model[] = [];
    this.revenueService.getRevenues().subscribe ((data: revenue_model[]) => {
      listaR = data;
      for (let revenue of listaR) {
        this.addToListR(revenue);  
      }   

    });

    this.getYears();
  }


  addToListE(expense:expense_model){
    this.expenses.push(expense);
  }

  addToListR(revenue:revenue_model){
    this.revenues.push(revenue);
  }



  //verificar que se cumpla para gastos e ingresos
  getYears(){
    this.yearsOn = [];
    let aux_date:string = "";
    let dateParts: string[] = [];
    let year: string = "";
    let yearOn: string = "";

    for (let expense of this.expenses) {
      aux_date = expense.date;
      dateParts = aux_date.split("/");
      year = dateParts[2];
      yearOn = year.toString();
      if (!this.yearsOn.includes(yearOn)) { // verificar si el año ya ha sido agregado a la matriz
        this.yearsOn.push(yearOn);
      }
      this.yearsOn.push(yearOn);
    } 
    this.yearsOn = this.yearsOn.sort((a, b) => parseInt(b) - parseInt(a));
  }
}