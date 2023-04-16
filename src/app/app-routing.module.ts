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
import { UserLoginGuard } from './user-login.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'settings', component: SettingsComponent, canActivate:[UserLoginGuard] },
  { path: 'balance_total', component: BalanceTotalComponent, canActivate:[UserLoginGuard] },
  { path: 'client_list', component: ClientListComponent, canActivate:[UserLoginGuard] },
  { path: 'client_registration', component: ClientRegistrationComponent, canActivate:[UserLoginGuard] },
  { path: 'client_remaining_days', component: ClientRemainingDaysComponent, canActivate:[UserLoginGuard] },
  { path: 'client_update', component: ClientUpdateComponent, canActivate:[UserLoginGuard] },
  { path: 'expense_list', component: ExpenseListComponent, canActivate:[UserLoginGuard] },
  { path: 'expense_registration', component: ExpenseRegistrationComponent, canActivate:[UserLoginGuard] },
  { path: 'expense_total', component: ExpenseTotalComponent, canActivate:[UserLoginGuard] },
  { path: 'revenue_list', component: RevenueListComponent, canActivate:[UserLoginGuard] },
  { path: 'revenue_registration', component: RevenueRegistrationComponent, canActivate:[UserLoginGuard] },
  { path: 'revenue_total', component: RevenueTotalComponent, canActivate:[UserLoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }