import { Component } from '@angular/core';
import { client_model } from 'src/app/models/client_model';
import { remaining_model } from 'src/app/models/remaining_model';
import { ClientService } from 'src/app/services/client_service/client-service';

@Component({
  selector: 'app-client-remaining-days',
  templateUrl: './client-remaining-days.component.html',
  styleUrls: ['./client-remaining-days.component.css']
})
export class ClientRemainingDaysComponent {
  remaining_days: remaining_model[] = [];
  displayedColumns: string[] = ['cedula', 'name', 'days', 'status'];
  dataSource = this.remaining_days;

  constructor(public clientService:ClientService){}

  ngOnInit(): void { 
    const currentDate = this.today();
    this.remaining_days = [];
    let lista: client_model[] = [];
    this.clientService.getClients().subscribe ((data: client_model[]) => {
      lista = data;
      for (let cliente of lista) {
        let rd = this.dateDiffInDays(currentDate, cliente.end_date);
        let sign:number = 1;
        if ((new Date(currentDate)).getTime() > (new Date(cliente.end_date)).getTime()) {
          sign = -1;
        }
        let stat:string = "";
        if((rd*sign) <= 0){
          stat = "Deshabilitado"
        }
        else{
          stat = "Habilitado"
        }
        let rem_day = {cedula: cliente.cedula, name:cliente.name+" "+cliente.lastname , days:rd*sign , status:stat}
        this.remaining_days.push(rem_day);
      }      
      this.dataSource = this.remaining_days;
    });
  }

  dateDiffInDays(dateString1: string, dateString2: string): number {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);
    let sign:number = 0;
    if (date1.getTime() > date2.getTime()) {
      sign = -1;
    }
    else if (date1.getTime() < date2.getTime()){
      sign = 1;
    }
    let diffInMs = date2.getTime() - date1.getTime();
    let diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    let result:number = diffInDays * sign;
    return result;
  }
  
  today(){
    let today = new Date();
    const day = today.getDate().toString().padStart(2, '0'); // obtiene el día y lo convierte en una cadena con cero a la izquierda si es necesario
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // obtiene el mes y lo convierte en una cadena con cero a la izquierda si es necesario (agrega 1 porque los meses en JavaScript comienzan en 0)
    const year = today.getFullYear().toString(); // obtiene el año como cadena
    const formattedDate = `${month}/${day}/${year}`; // une el día, el mes y el año en el formato dd/mm/yyyy
    return formattedDate;  
  }
}
