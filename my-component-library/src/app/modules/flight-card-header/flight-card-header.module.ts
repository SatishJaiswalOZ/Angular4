import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightCardHeaderComponent } from './flight-card-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FlightCardHeaderComponent],
  exports: [
    FlightCardHeaderComponent 
  ]
})
export class FlightCardHeaderModule { }
