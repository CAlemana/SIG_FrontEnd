import { Component } from '@angular/core';
import { date_model } from 'src/app/models/date_model';
import { expense_model } from 'src/app/models/expense_model';
import { month_model } from 'src/app/models/month_model';
import { revenue_model } from 'src/app/models/revenue_model';
import { ExpenseService } from 'src/app/services/expense_service/expense.service';
import { RevenueService } from 'src/app/services/revenue_service/revenue.service';
import { forkJoin } from 'rxjs';

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
    this.revenues = [];
  
    const expensesObs = this.expenseService.getExpenses();
    const revenuesObs = this.revenueService.getRevenues();
  
    forkJoin([expensesObs, revenuesObs]).subscribe(([expenses, revenues]) => {
      expenses.forEach(expense => this.addToListE(expense));
      revenues.forEach(revenue => this.addToListR(revenue));
      this.set_balance(this.revenues, this.expenses);
    });
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

  set_balance(revenues: revenue_model[], expenses: expense_model[]) {
    this.datesOn = [];
    const gastos_mensuales: date_model[] = this.getDates_exp(expenses);
    const ingresos_mensuales: date_model[] = this.getDates_rev(revenues);
  
    for (const ingreso of ingresos_mensuales) {
      const year = ingreso.year;
      const dateOn: date_model = { year, months: [] };
  
      for (const mes_ingresos of ingreso.months) {
        const mes = mes_ingresos.num_mes;
        let total = mes_ingresos.total;
  
        for (const gasto of gastos_mensuales) {
          if (gasto.year === year) {
            for (const mes_gastos of gasto.months) {
              if (mes_gastos.num_mes === mes) {
                total -= mes_gastos.total;
              }
            }
          }
        }
  
        const month: month_model = { mes: mes_ingresos.mes, num_mes: mes, total };
        dateOn.months.push(month);
      }
  
      this.datesOn.push(dateOn);
    }
  
    for (const gasto of gastos_mensuales) {
      const year = gasto.year;
      let yearFound = false;
  
      for (const ingreso of ingresos_mensuales) {
        if (ingreso.year === year) {
          yearFound = true;
          break;
        }
      }
  
      if (!yearFound) {
        const dateOn: date_model = { year, months: [] };
        const month: month_model = { mes: gasto.months[0].mes, num_mes: gasto.months[0].num_mes, total: -gasto.months[0].total };
        dateOn.months.push(month);
        this.datesOn.push(dateOn);
      }
    }
  }
  
}