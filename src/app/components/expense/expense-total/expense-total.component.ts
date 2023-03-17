import { Component } from '@angular/core';
import { expense_model } from 'src/app/models/expense_model';
import { ExpenseService } from 'src/app/services/expense_service/expense.service';


@Component({
  selector: 'app-expense-total',
  templateUrl: './expense-total.component.html',
  styleUrls: ['./expense-total.component.css']
})
export class ExpenseTotalComponent {
  expenses: expense_model[] = [];
  yearsOn: string[] = [];
  

  constructor(private expenseService:ExpenseService){}

  ngOnInit(): void { 
    this.expenses = [];
    let lista: expense_model[] = [];
    this.expenseService.getExpenses().subscribe ((data: expense_model[]) => {
      lista = data;
      for (let revenue of lista) {
        this.addToList(revenue);  
      }   

    });
    this.getYears();
  }


  addToList(expense:expense_model){
    this.expenses.push(expense);
  }

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