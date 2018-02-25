import { Component, OnInit,Input } from '@angular/core';
import { CurrencyPipe,UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {

  @Input()
  flightDetails:any={};

  constructor() { }

  ngOnInit() {
  }
}
