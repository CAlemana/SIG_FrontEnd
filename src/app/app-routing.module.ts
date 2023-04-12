import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BalanceTotalComponent } from './components/balance/balance-total/balance-total.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientRegistrationComponent } from './components/client/client-registration/client-registration.component';
import { ClientRemainingDaysComponent } from './components/client/client-remaining-days/client-remaining-days.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ExpenseListComponent } from './components/expense/expense-list/expense-list.component';
import { ExpenseRegistrationComponent } from './components/expense/expense-registration/expense-registration.component';
import { ExpenseTotalComponent } from './components/expense/expense-total/expense-total.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RevenueListComponent } from './components/revenue/revenue-list/revenue-list.component';
import { RevenueRegistrationComponent } from './components/revenue/revenue-registration/revenue-registration.component';
import { RevenueTotalComponent } from './components/revenue/revenue-total/revenue-total.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'balance_total', component: BalanceTotalComponent },
  { path: 'client_list', component: ClientListComponent },
  { path: 'client_registration', component: ClientRegistrationComponent },
  { path: 'client_remaining_days', component: ClientRemainingDaysComponent },
  { path: 'client_update', component: ClientUpdateComponent },
  { path: 'expense_list', component: ExpenseListComponent },
  { path: 'expense_registration', component: ExpenseRegistrationComponent },
  { path: 'expense_total', component: ExpenseTotalComponent },
  { path: 'revenue_list', component: RevenueListComponent },
  { path: 'revenue_registration', component: RevenueRegistrationComponent },
  { path: 'revenue_total', component: RevenueTotalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }