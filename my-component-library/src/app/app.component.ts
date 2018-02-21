import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
//import { SearchService } from './app.component.search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [/*SearchService*/]
})
export class AppComponent {
  title = 'app';
  private mockedApiUrl="http://localhost:7878/first";
  data:any={};

  //results: Object;
  searchTerm$ = new Subject<string>();
  
 
  private searchResult = '';
  searchResults = [];
  constructor(private http:Http){
  //TO OPTIMIZE THE LATENCY, INSTEAD OF WHOLE DATA, ONLY QUERY DATA SHOULD BE FETCH.
  //BELOW SERVICE DOES THE SAME BUT API REQUIRE SERVICE EXPOSURE WITH QUERYSTRING PARAMETER.
  //constructor(private searchService: SearchService) {
  console.log('Hi! this is mocked data');
  this.getFlightsDetails();
  this.getData();

  //this.searchService.search(this.searchTerm$)
  //.subscribe(results => {
  //this.results = results.results;
  //});
  }

  getData(){
    return this.http.get(this.mockedApiUrl)
    .map((res:Response)=>res.json())
  }

  getFlightsDetails(){
    this.getData().subscribe(data=>{
      console.log(data);
    this.data=data;

    for (let i = 0; i < data.length; i++) {
      if (data[i].from == "Delhi") {
          this.searchResult = data[i];
          this.searchResults.push(this.searchResult);
      }
    }
    console.log(this.searchResults); 
  })
  }
}
