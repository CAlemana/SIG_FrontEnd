import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { expense_model } from 'src/app/models/expense_model';
import { ExpenseService } from 'src/app/services/expense_service/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent {
  expenses: expense_model[] = [];
  displayedColumns: string[] = ['value', 'date', 'kind'];
  dataSource = this.expenses;

  
  constructor(private router: Router, public expenseService:ExpenseService){}

  ngOnInit(): void { 
    this.expenses = [];
    let lista: expense_model[] = [];
    this.expenseService.getExpenses().subscribe ((data: expense_model[]) => {
      lista = data;
      this.dataSource = data;
      for (let expense of lista) {
        this.addToList(expense);  
      }      
    });
  }


  addToList(expense:expense_model){
    this.expenses.push(expense);
  }

 deleteExpense(cedula:number){
  let lista: expense_model[] = [];

  this.expenseService.deleteExpense(cedula).subscribe(data =>{ 
  })

  this.expenseService.getExpenses().subscribe ((data: expense_model[]) => {
    lista = data;
    this.dataSource = data;
    
    for (let expense of lista) {
      this.addToList(expense);  
    }
    this.reloadPage();
  });
 }

 reloadPage(){
  //delay(20000);
  window.location.reload();
 }
}
