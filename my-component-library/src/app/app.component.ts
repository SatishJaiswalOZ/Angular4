import { Component } from '@angular/core';
//app specific.
import { SearchService } from './app.component.service';
import * as moment from 'moment';
import { IfDetails, IfDetailsHeader } from './app.component.if-details';
import { TabsContainer } from 'angular-tabs-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SearchService]
})
export class AppComponent {
  private fareSearchResults = [];
  private tempOriginalSearchResults = [];
  private searchResult:IfDetails;
 
  title = 'Flight Search Engine'; 
  flightsearchResult:IfDetails []=[];
  currentSearchdetails:IfDetailsHeader={
    origin:undefined,
    destination:undefined,
    departureDate:undefined,
    returnDate:undefined,
    isOneWay:true};
  statusMessage:string

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
       this.getFlightsDetails(form);
    }
    else {
      this.getFareFilteredData(form);
    }

    this.currentSearchdetails.origin = form.origin;
    this.currentSearchdetails.destination = form.destination;
    this.currentSearchdetails.isOneWay=form.isOneWay;

    //TODO:put these 2 lines in some utility.
    let departureDate: moment.Moment = moment(form.departureDate.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
    this.currentSearchdetails.departureDate =departureDate.format();
    if(!form.isOneWay)
    {
      let returnDate: moment.Moment =moment(form.returnDate.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
      this.currentSearchdetails.returnDate =returnDate.format();
    }
  }

  
  getFlightsDetails(form:any)
  {
    if(this.tempOriginalSearchResults && this.tempOriginalSearchResults.length>0)
    {
      this.tempOriginalSearchResults=[];
      this.flightsearchResult=[];
    }
      this.searchService.getData().subscribe(data=>
        {
          console.log(data);
          //data.filter(..) can also be used instead of loop
          for (let i = 0; i < data.length; i++) 
          {
            //for now just to check.It will be replaced by actual queryString.
            //Also, these conversion can be pushed to utility
            let collectionDepartureDate: moment.Moment = moment(data[i].departDetails.departureDate);
            let searchDepartureDate: moment.Moment = moment(form.departureDate.replace
              (/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));

            let collectionReturnDate: moment.Moment = !form.isOneWay? moment(data[i].returnDetails.returnDate): undefined;
            let searchReturnDate: moment.Moment =!form.isOneWay ? moment(form.returnDate.replace
              (/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")):undefined;

            if ((data[i].departDetails.origin.toLowerCase( ) == form.origin.toLowerCase( )) && 
            (data[i].departDetails.destination.toLowerCase( ) == form.destination.toLowerCase( )) &&  
            (searchDepartureDate.format() == collectionDepartureDate.format()) &&
            (form.isOneWay ? true: searchReturnDate.format()==collectionReturnDate.format()))  {
                this.searchResult = data[i];
                this.flightsearchResult.push(this.searchResult);
            }
          }
          //keep a copy for filter search
          this.tempOriginalSearchResults= this.flightsearchResult
        },
        (error)=>{this.statusMessage='Ooops! Data fetching issues. Please try later.'},
        ()=>{ this.flightsearchResult.length==0?this.statusMessage='Sorry! No Flights for the choosen criteria.':this.statusMessage=''; })
        console.log('Search Results: ',this.flightsearchResult);
  }  
  
  getFareFilteredData(form:any)
  {
    if(this.fareSearchResults.length!=0)
    {
      this.fareSearchResults=[];
    }
    for (let i = 0; i < this.tempOriginalSearchResults.length; i++) 
    {
      //for now just to check.It will be replaced by actual queryString
      if (Number(this.tempOriginalSearchResults[i].fare) >=Number(form.fareFrom) 
      && Number(this.tempOriginalSearchResults[i].fare) <=Number(form.fareUpTo)  ) 
      {
          this.searchResult = this.tempOriginalSearchResults[i];
          this.fareSearchResults.push(this.searchResult);
      }
    }
    console.log('Slider Filtered Results: ',this.fareSearchResults);
    this.flightsearchResult = this.fareSearchResults;
    this.flightsearchResult.length==0?
      this.statusMessage='Sorry! No matching flight do exist. Please try with different fare range.':
      this.statusMessage='';
  }
}
