import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { revenue_model } from 'src/app/models/revenue_model';
import { RevenueService } from 'src/app/services/revenue_service/revenue.service';

@Component({
  selector: 'app-revenue-list',
  templateUrl: './revenue-list.component.html',
  styleUrls: ['./revenue-list.component.css']
})
export class RevenueListComponent {
  revenues: revenue_model[] = [];
  displayedColumns: string[] = ['value', 'date', 'kind'];
  dataSource = this.revenues;

  constructor(private router: Router, public revenueService:RevenueService){}

  ngOnInit(): void { 
    this.revenues = [];
    let lista: revenue_model[] = [];
    this.revenueService.getRevenues().subscribe ((data: revenue_model[]) => {
      lista = data;
      this.dataSource = data;
      for (let revenue of lista) {
        this.addToList(revenue);  
      }      
    });
  }


  addToList(revenue:revenue_model){
    this.revenues.push(revenue);
  }

 deleteRevenues(cedula:number){
  let lista: revenue_model[] = [];

  this.revenueService.deleteRevenue(cedula).subscribe(data =>{ 
  })

  this.revenueService.getRevenues().subscribe ((data: revenue_model[]) => {
    lista = data;
    this.dataSource = data;
    
    for (let revenue of lista) {
      this.addToList(revenue);  
    }
    this.reloadPage();
  });
 }

 reloadPage(){
  //delay(20000);
  window.location.reload();
 }
}
