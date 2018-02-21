import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Response} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  baseUrl: string = 'http://localhost:7878/first';
  queryUrl: string = '?search=';
  private searchResult = '';
  private mockedApiUrl="http://localhost:7878/first";

  //results: Object;
  searchTerm$ = new Subject<string>();
  searchResults = [];

  constructor(private http:Http) { }

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

  getFlightsDetails(form:any):any[]{
    this.getData().subscribe(data=>{
      console.log(data);
      if(this.searchResults.length!=0)
      {
        this.searchResults=[];
      }
    for (let i = 0; i < data.length; i++) {
      //for now just to check.It will be replaced by actual queryString
      if (data[i].from.toLowerCase( ) == form.from.toLowerCase( ) 
      && data[i].to.toLowerCase( ) == form.to.toLowerCase( ) ) {
          this.searchResult = data[i];
          this.searchResults.push(this.searchResult);
      }
    }
    console.log(this.searchResults); 
  })
  return this.searchResults;
  }
}