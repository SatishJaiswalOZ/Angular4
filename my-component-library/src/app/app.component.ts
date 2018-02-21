import { Component } from '@angular/core';
import { SearchService } from './app.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SearchService]
})
export class AppComponent {
  title = 'app'; 
  flightsearchResult;

  constructor(private searchService: SearchService) {
  }

  onFlightSearchRequested(form:any):void{
      this.flightsearchResult =   this.searchService.getFlightsDetails(form);
  }

}
