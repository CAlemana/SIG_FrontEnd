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
  kind_value:string = '';
  date:string = '';

  constructor(public expenseService:ExpenseService){}

  setValue(value:number){
    this.value = value;
  }

  setKindrevenue(kind_value:string){
    this.kind_value = kind_value;
  }

  setDate(event: { value: any; }){
    let date:Date = event.value;
    const day = date.getDate().toString().padStart(2, '0'); // obtiene el día y lo convierte en una cadena con cero a la izquierda si es necesario
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // obtiene el mes y lo convierte en una cadena con cero a la izquierda si es necesario (agrega 1 porque los meses en JavaScript comienzan en 0)
    const year = date.getFullYear().toString(); // obtiene el año como cadena
    const formattedDate = `${month}/${day}/${year}`; // une el día, el mes y el año en el formato dd/mm/yyyy
    this.date = formattedDate;
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