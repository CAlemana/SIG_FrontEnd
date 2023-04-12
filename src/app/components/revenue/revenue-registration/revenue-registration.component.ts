import { Component } from '@angular/core';
import { revenue_model } from 'src/app/models/revenue_model';
import { RevenueService } from 'src/app/services/revenue_service/revenue.service';

@Component({
  selector: 'app-revenue-registration',
  templateUrl: './revenue-registration.component.html',
  styleUrls: ['./revenue-registration.component.css']
})
export class RevenueRegistrationComponent {

  value:number = 0;
  kind_value:string = '';
  date:string = "";

  constructor(public revenueService:RevenueService){}

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

  postIngreso(){
    let ingreso: revenue_model = {value:this.value, kind_value:this.kind_value, date:this.date };
    this.revenueService.addRevenue(ingreso).subscribe(results => {
      this.reloadPage();
    });
   }

   reloadPage(){
    //delay(2000);
    window.location.reload();
   }
}