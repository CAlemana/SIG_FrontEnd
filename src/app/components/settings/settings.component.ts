import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  client_list = true;
  client_registration = true;
  client_remaining_days = true;
  client_update = true;

  expense_list = true;
  expense_registration = true;
  expense_total = true;

  revenue_list = true;
  revenue_registration = true;
  revenue_total = true;

  

  balance_total = true;

  constructor(private router: Router){}

  to_client_list(){
    this.client_list = false;
    this.client_registration = true;
    this.client_remaining_days = true;
    this.client_update = true;

    this.expense_list = true;
    this.expense_registration = true;
    this.expense_total = true;

    this.revenue_list = true;
    this.revenue_registration = true;
    this.revenue_total = true;

    
    
    this.balance_total = true;
  }


  to_client_registration(){
    this.client_list = true;
    this.client_registration = false;
    this.client_remaining_days = true;
    this.client_update = true;

    this.expense_list = true;
    this.expense_registration = true;
    this.expense_total = true;

    this.revenue_list = true;
    this.revenue_registration = true;
    this.revenue_total = true;

    
    
    this.balance_total = true;
  }


  to_client_remaining_days(){
    this.client_list = true;
    this.client_registration = true;
    this.client_remaining_days = false;
    this.client_update = true;

    this.expense_list = true;
    this.expense_registration = true;
    this.expense_total = true;

    this.revenue_list = true;
    this.revenue_registration = true;
    this.revenue_total = true;

    
    
    this.balance_total = true;
  }


  to_client_update(){
    this.client_list = true;
    this.client_registration = true;
    this.client_remaining_days = true;
    this.client_update = false;

    this.expense_list = true;
    this.expense_registration = true;
    this.expense_total = true;

    this.revenue_list = true;
    this.revenue_registration = true;
    this.revenue_total = true;

   
    
    this.balance_total = true;
  }


  to_expense_list(){
    this.client_list = true;
    this.client_registration = true;
    this.client_remaining_days = true;
    this.client_update = true;

    this.expense_list = false;
    this.expense_registration = true;
    this.expense_total = true;

    this.revenue_list = true;
    this.revenue_registration = true;
    this.revenue_total = true;

    
    
    this.balance_total = true;
  }


  to_expense_registration(){
    this.client_list = true;
    this.client_registration = true;
    this.client_remaining_days = true;
    this.client_update = true;

    this.expense_list = true;
    this.expense_registration = false;
    this.expense_total = true;

    this.revenue_list = true;
    this.revenue_registration = true;
    this.revenue_total = true;

   
    
    this.balance_total = true;
  }


  to_expense_total(){
    this.client_list = true;
    this.client_registration = true;
    this.client_remaining_days = true;
    this.client_update = true;

    this.expense_list = true;
    this.expense_registration = true;
    this.expense_total = false;

    this.revenue_list = true;
    this.revenue_registration = true;
    this.revenue_total = true;

    
    
    this.balance_total = true;
  }





  to_revenue_list(){
    this.client_list = true;
    this.client_registration = true;
    this.client_remaining_days = true;
    this.client_update = true;

    this.expense_list = true;
    this.expense_registration = true;
    this.expense_total = true;

    this.revenue_list = false;
    this.revenue_registration = true;
    this.revenue_total = true;


    
    this.balance_total = true;
  }


  to_revenue_registration(){
    this.client_list = true;
    this.client_registration = true;
    this.client_remaining_days = true;
    this.client_update = true;

    this.expense_list = true;
    this.expense_registration = true;
    this.expense_total = true;

    this.revenue_list = true;
    this.revenue_registration = false;
    this.revenue_total = true;

    
    this.balance_total = true;
  }


  to_revenue_total(){
    this.client_list = true;
    this.client_registration = true;
    this.client_remaining_days = true;
    this.client_update = true;

    this.expense_list = true;
    this.expense_registration = true;
    this.expense_total = true;

    this.revenue_list = true;
    this.revenue_registration = true;
    this.revenue_total = false;

  
    
    this.balance_total = true;
  }


  to_balance_total(){
    this.client_list = true;
    this.client_registration = true;
    this.client_remaining_days = true;
    this.client_update = true;

    this.expense_list = true;
    this.expense_registration = true;
    this.expense_total = true;

    this.revenue_list = true;
    this.revenue_registration = true;
    this.revenue_total = true;

  
    
    this.balance_total = false;
  }
  SignOut(){
    this.router.navigate(['/login']);
  }
}