import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Response} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import * as moment from 'moment';

@Injectable()
export class SearchService {
  private searchResult = '';
  private mockedApiUrl="http://localhost:7878/first";
  private searchResults = [];
  private fareSearchResults = [];

  baseUrl: string = 'http://localhost:7878/first';
  queryUrl: string = '?search=';
    //results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private http:Http) { }
  
  //TO OPTIMIZE THE LATENCY, INSTEAD OF WHOLE DATA, ONLY QUERY DATA SHOULD BE FETCH.
  //BELOW SERVICE DOES THE SAME BUT API REQUIRE SERVICE EXPOSURE WITH QUERYSTRING PARAMETER.
  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
        .get(this.baseUrl + this.queryUrl + term)
        .map(res => res.json());
  }

  getData(){
    return this.http.get(this.mockedApiUrl)
    .map((res:Response)=>res.json())
  }

  getFlightsDetails(form:any):any[]
  {
    if( this.searchResults.length>0)
    {
      this.searchResults=[];
    }
      this.getData().subscribe(data=>
        {
          console.log(data);
          //data.filter(..) can also be used instead of loop
          for (let i = 0; i < data.length; i++) 
          {
            //for now just to check.It will be replaced by actual queryString
            let collectionDate: moment.Moment = moment(data[i].date);
            let searchDate: moment.Moment = moment(form.dateInput.replace( /(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"));
            
            if ((data[i].from.toLowerCase( ) == form.from.toLowerCase( )) && 
            (data[i].to.toLowerCase( ) == form.to.toLowerCase( )) &&  
            (searchDate.format() == collectionDate.format()))  {
                this.searchResult = data[i];
                this.searchResults.push(this.searchResult);
            }
          }
        })
        console.log('Search Results: ',this.searchResults);
        return this.searchResults;
  }  
  
  getFareFilteredData(form:any):any[]
  {
    if(this.fareSearchResults.length!=0)
    {
      this.fareSearchResults=[];
    }
    for (let i = 0; i < this.searchResults.length; i++) 
    {
      //for now just to check.It will be replaced by actual queryString
      if (Number(this.searchResults[i].fare) >=Number(form.fareFrom) 
      && Number(this.searchResults[i].fare) <=Number(form.fareUpTo)  ) 
      {
          this.searchResult = this.searchResults[i];
          this.fareSearchResults.push(this.searchResult);
      }
    }
    console.log('Slider Filtered Results: ',this.fareSearchResults);
    return this.fareSearchResults;
  }
}