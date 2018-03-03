import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//app specific.
import { FlightCardComponent } from './flight-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FlightCardComponent],
  exports: [FlightCardComponent]
})
export class FlightCardModule { }
