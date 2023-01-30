import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceHistoryComponent } from './components/balance/balance-history/balance-history.component';
import { BalanceTotalComponent } from './components/balance/balance-total/balance-total.component';
import { ImcComputationComponent } from './components/imc/imc-computation/imc-computation.component';
import { ImcRegisteredListComponent } from './components/imc/imc-registered-list/imc-registered-list.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientRegistrationComponent } from './components/client/client-registration/client-registration.component';
import { ClientRemainingDaysComponent } from './components/client/client-remaining-days/client-remaining-days.component';
import { ExpenseHistoryComponent } from './components/expense/expense-history/expense-history.component';
import { ExpenseListComponent } from './components/expense/expense-list/expense-list.component';
import { ExpenseRegistrationComponent } from './components/expense/expense-registration/expense-registration.component';
import { ExpenseTotalComponent } from './components/expense/expense-total/expense-total.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RevenueHistoryComponent } from './components/revenue/revenue-history/revenue-history.component';
import { RevenueListComponent } from './components/revenue/revenue-list/revenue-list.component';
import { RevenueRegistrationComponent } from './components/revenue/revenue-registration/revenue-registration.component';
import { RevenueTotalComponent } from './components/revenue/revenue-total/revenue-total.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, //si la ruta ingresada no coincide con las especificada, se redirige al login
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'balance_history', component: BalanceHistoryComponent },
  { path: 'balance_total', component: BalanceTotalComponent },
  { path: 'imc_computation', component: ImcComputationComponent },
  { path: 'imc_registered_list', component: ImcRegisteredListComponent },
  { path: 'client_list', component: ClientListComponent },
  { path: 'client_registration', component: ClientRegistrationComponent },
  { path: 'client_remaining_days', component: ClientRemainingDaysComponent },
  { path: 'expense_history', component: ExpenseHistoryComponent },
  { path: 'expense_list', component: ExpenseListComponent },
  { path: 'expense_registration', component: ExpenseRegistrationComponent },
  { path: 'expense_total', component: ExpenseTotalComponent },
  { path: 'revenue_history', component: RevenueHistoryComponent },
  { path: 'revenue_list', component: RevenueListComponent },
  { path: 'revenue_registration', component: RevenueRegistrationComponent },
  { path: 'revenue_total', component: RevenueTotalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
