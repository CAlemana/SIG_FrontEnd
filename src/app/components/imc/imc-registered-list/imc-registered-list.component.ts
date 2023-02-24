import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { imc_model } from 'src/app/models/imc_model';
import { ImcService } from 'src/app/services/imc_service/imc.service';

@Component({
  selector: 'app-imc-registered-list',
  templateUrl: './imc-registered-list.component.html',
  styleUrls: ['./imc-registered-list.component.css']
})
export class ImcRegisteredListComponent {
  imc_registered: imc_model[] = [];
  displayedColumns: string[] = ['cedula', 'name', 'height', 'weight', 'imc'];
  dataSource = this.imc_registered;


  constructor(private router: Router, public imcService:ImcService){}


  ngOnInit(): void { 
    this.imc_registered = [];
    let lista: imc_model[] = [];
    this.imcService.getIMC().subscribe ((data: imc_model[]) => {
      lista = data;
      this.dataSource = data;
      for (let imc of lista) {
        this.addToList(imc);  
      }      
    });
  }




  addToList(imc:imc_model){
    this.imc_registered.push(imc);
  }


 deleteIMC(cedula:number){
  let lista: imc_model[] = [];


  this.imcService.deleteIMC(cedula).subscribe(data =>{ 
  })


  this.imcService.getIMC().subscribe ((data: imc_model[]) => {
    lista = data;
    this.dataSource = data;
    
    for (let imc of lista) {
      this.addToList(imc);  
    }
    this.reloadPage();
  });
 }


 reloadPage(){
  //delay(20000);
  window.location.reload();
 }


}
