import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider'; 

import { AppComponent } from './app.component';
import { SettingsComponent } from './components/settings/settings.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClientRegistrationComponent } from './components/client/client-registration/client-registration.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientRemainingDaysComponent } from './components/client/client-remaining-days/client-remaining-days.component';
import { RevenueRegistrationComponent } from './components/revenue/revenue-registration/revenue-registration.component';
import { ExpenseListComponent } from './components/expense/expense-list/expense-list.component';
import { ExpenseRegistrationComponent } from './components/expense/expense-registration/expense-registration.component';
import { ExpenseTotalComponent } from './components/expense/expense-total/expense-total.component';
import { RevenueListComponent } from './components/revenue/revenue-list/revenue-list.component';
import { RevenueTotalComponent } from './components/revenue/revenue-total/revenue-total.component';
import { BalanceTotalComponent } from './components/balance/balance-total/balance-total.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    LoginComponent,
    RegisterComponent,
    ClientRegistrationComponent,
    ClientListComponent,
    ClientRemainingDaysComponent,
    ExpenseListComponent,
    ExpenseRegistrationComponent,
    ExpenseTotalComponent,
    RevenueListComponent,
    RevenueRegistrationComponent,
    RevenueTotalComponent,
    BalanceTotalComponent,
  
    ClientUpdateComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatExpansionModule,
    MatListModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }