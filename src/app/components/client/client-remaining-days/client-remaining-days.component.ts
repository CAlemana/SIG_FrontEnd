import { Component } from '@angular/core';
import { remaining_model } from 'src/app/models/remaining_model';

@Component({
  selector: 'app-client-remaining-days',
  templateUrl: './client-remaining-days.component.html',
  styleUrls: ['./client-remaining-days.component.css']
})
export class ClientRemainingDaysComponent {
  remaining_days: remaining_model[] = [];
  displayedColumns: string[] = ['cedula', 'name', 'days', 'status'];
  dataSource = this.remaining_days;

}
