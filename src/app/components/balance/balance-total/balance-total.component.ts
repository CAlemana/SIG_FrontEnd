import { Component } from '@angular/core';
import { date_model } from 'src/app/models/date_model';
import { expense_model } from 'src/app/models/expense_model';
import { month_model } from 'src/app/models/month_model';
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
  datesOn_rev: date_model[] = [];
  datesOn_exp: date_model[] = [];
  datesOn: date_model[] = [];
  

  constructor(private expenseService:ExpenseService, private revenueService:RevenueService){}

  ngOnInit(): void { 
    this.expenses = [];
    let listaExp: expense_model[] = [];
    this.expenseService.getExpenses().subscribe ((data: expense_model[]) => {
      listaExp = data;
      for (let expense of listaExp) {
        this.addToListE(expense);  
      }   
      //this.getDates_exp(this.expenses);
    });

    this.revenues = [];
    let listaRev: revenue_model[] = [];
    this.revenueService.getRevenues().subscribe ((data: revenue_model[]) => {
      listaRev = data;
      for (let revenue of listaRev) {
        this.addToListR(revenue);  
      }   
      //this.getDates_rev(this.revenues);
    });

    this.set_balance(this.revenues, this.expenses);
  }


  addToListE(expense:expense_model){
    this.expenses.push(expense);
  }

  addToListR(revenue:revenue_model){
    this.revenues.push(revenue);
  }



  //verificar que se cumpla para gastos e ingresos
  getDates_exp(expense_list: expense_model[]) {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
    this.datesOn_exp = [];
    
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

      if (!this.datesOn_exp.some(date => date.year === year)){
        let dateOn:date_model = {year:"", months:[]};
        dateOn.year = year;
        this.datesOn_exp.push(dateOn);
        
        for (let date of this.datesOn_exp){
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
      else if (this.datesOn_exp.some(date => date.year === year)){
        for (let date of this.datesOn_exp){
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

    this.datesOn_exp = this.datesOn_exp.sort((a, b) => parseInt(b.year) - parseInt(a.year));

    for (let date of this.datesOn_exp){
      date.months = date.months.sort((a, b) => parseInt(a.num_mes) - parseInt(b.num_mes));
    }

    return this.datesOn_exp;
  }


  //verificar que se cumpla para gastos e ingresos
  getDates_rev(revenue_list: revenue_model[]) {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"];
    this.datesOn_rev = [];
    
    let value:number = 0;
    let aux_date:string = "";
    let dateParts: string[] = [];
    let year:string = "";
    let month_num:string = "";
    let month:string = "";
    let day:string = "";
    
    for (let expense of revenue_list) {
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

      if (!this.datesOn_rev.some(date => date.year === year)){
        let dateOn:date_model = {year:"", months:[]};
        dateOn.year = year;
        this.datesOn_rev.push(dateOn);
        
        for (let date of this.datesOn_rev){
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
      else if (this.datesOn_rev.some(date => date.year === year)){
        for (let date of this.datesOn_rev){
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

    this.datesOn_rev = this.datesOn_rev.sort((a, b) => parseInt(b.year) - parseInt(a.year));

    for (let date of this.datesOn_rev){
      date.months = date.months.sort((a, b) => parseInt(a.num_mes) - parseInt(b.num_mes));
    }
    return this.datesOn_rev
  }

  set_balance(revenues:revenue_model[], expenses:expense_model[]){
    this.datesOn = [];
    let gastos_mensuales:date_model[] = this.getDates_exp(expenses);
    let ingresos_mensuales:date_model[] = this.getDates_rev(revenues);

    for(let ingreso of ingresos_mensuales){
      for(let gasto of gastos_mensuales){
        if(ingreso.year === gasto.year){
          for(let mes_ing of ingreso.months){
            let mes_gasto = gasto.months.find(m => m.num_mes === mes_ing.num_mes);
            if(mes_gasto){
              let dateOn:date_model = {year:"", months:[]};
              let month: month_model = { mes: mes_ing.mes, num_mes: mes_ing.num_mes, total: mes_ing.total - mes_gasto.total };
              dateOn.year = ingreso.year;
              dateOn.months.push(month);
              this.datesOn.push(dateOn);
              break;
            }
          }
        }
      }
    }
  }


}