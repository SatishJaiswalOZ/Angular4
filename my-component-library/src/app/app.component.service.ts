import { Injectable ,OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http,Response} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/Observable/throw';
import { IfDetails } from './app.component.if-details';

@Injectable()
export class SearchService implements OnInit{
  private baseUrl:string="http://localhost:7878/first";

  queryUrl: string = '?search=';
    //results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private http:Http) { }

  ngOnInit() {
  }

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

  getData():Observable <IfDetails[]>{
    return this.http.get(this.baseUrl)
    .map((res:Response)=><IfDetails[]>res.json())
    .catch(this.errorHandler)
  }

  errorHandler(error)
  {
    //logger can be used in real time app.
    //for now
    console.error("Something went wrong while fetching data from server");

    //throw back the error.
    return Observable.throw(error);
  }
}