import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {

  @Input()
  flightDetails;
  
  constructor() { }

  ngOnInit() {
  }

}
