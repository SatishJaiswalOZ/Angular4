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
  currentSearchdetails:any;

  constructor(private searchService: SearchService) {
    //this.searchService.search(this.searchTerm$)
    //.subscribe(results => {
    //this.results = results.results;
    //});
  }

  onFlightSearchRequested(form:any):void{
    this.currentSearchdetails = form;
    if(!form.filterRequested)    {   
       this.flightsearchResult =   this.searchService.getFlightsDetails(form);
       return;
    }
    if(this.currentSearchdetails)
    {
      this.currentSearchdetails={
        from:form.from,
        to:form.to,
        dateInput:form.dateInput}
    }
    this.flightsearchResult =   this.searchService.getFareFilteredData(form);
  }
}
