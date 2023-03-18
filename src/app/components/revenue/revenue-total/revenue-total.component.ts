import { Component } from '@angular/core';
import { revenue_model } from 'src/app/models/revenue_model';
import { RevenueService } from 'src/app/services/revenue_service/revenue.service';

@Component({
  selector: 'app-revenue-total',
  templateUrl: './revenue-total.component.html',
  styleUrls: ['./revenue-total.component.css']
})
export class RevenueTotalComponent {
  revenues: revenue_model[] = [];
  yearsOn: string[] = [];
  

  constructor(private revenueService:RevenueService){}

  ngOnInit(): void { 
    this.revenues = [];
    let lista: revenue_model[] = [];
    this.revenueService.getRevenues().subscribe ((data: revenue_model[]) => {
      lista = data;
      for (let revenue of lista) {
        this.addToList(revenue);  
      }   

    });
    this.getYears();
  }


  addToList(revenue:revenue_model){
    this.revenues.push(revenue);
  }

  getYears(){
    this.yearsOn = [];
    let aux_date:string = "";
    let dateParts: string[] = [];
    let year: string = "";
    let yearOn: string = "";

    for (let revenue of this.revenues) {
      aux_date = revenue.date;
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