import { Component, OnInit,Input } from '@angular/core';
import { UpperCasePipe,DatePipe } from '@angular/common';
@Component({
  selector: 'app-flight-card-header',
  templateUrl: './flight-card-header.component.html',
  styleUrls: ['./flight-card-header.component.css']
})
export class FlightCardHeaderComponent implements OnInit {
  @Input()
  currentSearchCriteria:any;
  
  constructor() { }

  ngOnInit() {
  }

}
