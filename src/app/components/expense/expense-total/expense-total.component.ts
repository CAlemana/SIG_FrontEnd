import { Component } from '@angular/core';
import { date_model } from 'src/app/models/date_model';
import { expense_model } from 'src/app/models/expense_model';
import { ExpenseService } from 'src/app/services/expense_service/expense.service';

@Component({
  selector: 'app-expense-total',
  templateUrl: './expense-total.component.html',
  styleUrls: ['./expense-total.component.css']
})
export class ExpenseTotalComponent {
  expenses: expense_model[] = [];
  datesOn: date_model[] = [];
  

  constructor(private expenseService:ExpenseService){}

  ngOnInit(): void { 
    this.expenses = [];
    let lista: expense_model[] = [];
    this.expenseService.getExpenses().subscribe ((data: expense_model[]) => {
      lista = data;
      for (let expense of lista) {
        this.addToList(expense);  
      }   
      this.getDates(this.expenses);
    });
  }


  addToList(expense:expense_model){
    this.expenses.push(expense);
  }

  getDates(expense_list: expense_model[]) {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
    this.datesOn = [];
    
    let value:number = 0;
    let aux_date:string = "";
    let dateParts: string[] = [];
    let year:string = "";
    let month_num:string = "";
    let month:string = "";
    let day:string = "";
    
    for (let expense of expense_list) {
      value = expense.value;
      aux_date = expense.date;
      dateParts = aux_date.split("/");
      year = dateParts[2];
      day = dateParts[1];
      month_num = dateParts[0];

      if (dateParts[0] === "01"){
        month = monthNames[0]
      }
      else if(dateParts[0] === "02"){
        month = monthNames[1]
      }
      else if(dateParts[0] === "03"){
        month = monthNames[2]
      }
      else if(dateParts[0] === "04"){
        month = monthNames[3]
      }
      else if(dateParts[0] === "05"){
        month = monthNames[4]
      }
      else if(dateParts[0] === "06"){
        month = monthNames[5]
      }
      else if(dateParts[0] === "07"){
        month = monthNames[6]
      }
      else if(dateParts[0] === "08"){
        month = monthNames[7]
      }
      else if(dateParts[0] === "09"){
        month = monthNames[8]
      }
      else if(dateParts[0] === "10"){
        month = monthNames[9]
      }
      else if(dateParts[0] === "11"){
        month = monthNames[10]
      }
      else if(dateParts[0] === "12"){
        month = monthNames[11]
      }
      else{
        month = "---"
      }

      if (!this.datesOn.some(date => date.year === year)){
        let dateOn:date_model = {year:"", months:[]};
        dateOn.year = year;
        this.datesOn.push(dateOn);
        
        for (let date of this.datesOn){
          if (date.year === year) {
            let existingMonth = date.months.find(mes => mes.num_mes === month_num);
            if (existingMonth) {
              existingMonth.total += value;
            } else {
              date.months.push({mes: month, num_mes: month_num, total: value});
            }
          }
        }
      }
      else if (this.datesOn.some(date => date.year === year)){
        for (let date of this.datesOn){
          if (date.year === year) {
            let existingMonth = date.months.find(mes => mes.num_mes === month_num);
            if (existingMonth) {
              existingMonth.total += value;
            } else {
              date.months.push({mes: month, num_mes: month_num, total: value});
            }
          }
        }
      }
    }

    this.datesOn = this.datesOn.sort((a, b) => parseInt(b.year) - parseInt(a.year));

    for (let date of this.datesOn){
      date.months = date.months.sort((a, b) => parseInt(a.num_mes) - parseInt(b.num_mes));
    }
  }

}