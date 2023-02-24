import { Component } from '@angular/core';
import { expense_model } from 'src/app/models/expense_model';
import { ExpenseService } from 'src/app/services/expense_service/expense.service';

@Component({
  selector: 'app-expense-registration',
  templateUrl: './expense-registration.component.html',
  styleUrls: ['./expense-registration.component.css']
})
export class ExpenseRegistrationComponent {
  value:number = 0;
  kind_value:number = 0;
  date:Date = new Date();

  constructor(public expenseService:ExpenseService){}

  setValue(value:number){
    this.value = value;
  }

  setKindrevenue(kind_value:number){
    this.kind_value = kind_value;
  }

  setDate(event: { value: any; }){
    let date:Date = event.value;
    this.date = date;
  }

  postGasto(){
    let gasto: expense_model = {value:this.value, kind_value:this.kind_value, date:this.date };
    this.expenseService.addExpense(gasto).subscribe(results => {
      this.reloadPage();
    });
   }

   reloadPage(){
    //delay(2000);
    window.location.reload();
   }
}
