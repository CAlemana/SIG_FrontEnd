
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImcService {

  

  computeIMC(height:number, weight:number){
    let imc:number = weight / (weight*weight);
    return imc;
  }
}