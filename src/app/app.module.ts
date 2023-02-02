import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BalanceHistoryComponent } from './components/balance/balance-history/balance-history.component';
import { BalanceTotalComponent } from './components/balance/balance-total/balance-total.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientRegistrationComponent } from './components/client/client-registration/client-registration.component';
import { ClientRemainingDaysComponent } from './components/client/client-remaining-days/client-remaining-days.component';
import { ExpenseHistoryComponent } from './components/expense/expense-history/expense-history.component';
import { ExpenseListComponent } from './components/expense/expense-list/expense-list.component';
import { ExpenseRegistrationComponent } from './components/expense/expense-registration/expense-registration.component';
import { ExpenseTotalComponent } from './components/expense/expense-total/expense-total.component';
import { ImcComputationComponent } from './components/imc/imc-computation/imc-computation.component';
import { ImcRegisteredListComponent } from './components/imc/imc-registered-list/imc-registered-list.component';
import { RevenueHistoryComponent } from './components/revenue/revenue-history/revenue-history.component';
import { RevenueListComponent } from './components/revenue/revenue-list/revenue-list.component';
import { RevenueRegistrationComponent } from './components/revenue/revenue-registration/revenue-registration.component';
import { RevenueTotalComponent } from './components/revenue/revenue-total/revenue-total.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    BalanceHistoryComponent,
    BalanceTotalComponent,
    ClientListComponent,
    ClientRegistrationComponent,
    ClientRemainingDaysComponent,
    ExpenseHistoryComponent,
    ExpenseListComponent,
    ExpenseRegistrationComponent,
    ExpenseTotalComponent,
    ImcComputationComponent,
    ImcRegisteredListComponent,
    RevenueHistoryComponent,
    RevenueListComponent,
    RevenueRegistrationComponent,
    RevenueTotalComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
