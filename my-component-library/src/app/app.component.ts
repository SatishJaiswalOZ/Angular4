import { Component } from '@angular/core';
import { SearchService } from './app.component.service';
import * as moment from 'moment';
import { IfDetails,IfDetailsHeader } from './app.component.if-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SearchService]
})
export class AppComponent {
  title = 'app'; 
  flightsearchResult:IfDetails [];
  currentSearchdetails:IfDetailsHeader={from:undefined,to:undefined,dateInput:undefined};

  constructor(private searchService: SearchService) {
    //this.searchService.search(this.searchTerm$)
    //.subscribe(results => {
    //this.results = results.results;
    //});
  }

  //for *ngFor performance enhancements as per best practices.
  trackbyTupleID(index:number,item:any):string{
    return item.id;
  }

  onFlightSearchRequested(form:any):void{
    if(!form.filterRequested){   
       this.flightsearchResult =   this.searchService.getFlightsDetails(form);
    }
    else {
      this.flightsearchResult =   this.searchService.getFareFilteredData(form);
    }

    this.currentSearchdetails.from = form.from;
    this.currentSearchdetails.to = form.to;
    let searchDate: moment.Moment = moment(form.dateInput.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
    this.currentSearchdetails.dateInput =searchDate.format();
  }
}
