import { Component } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private mockedApiUrl="http://localhost:7878/first";
  data:any={};

  constructor(private http:Http){
    console.log('Hi! this is mocked data');
    this.getFlightsDetails();
    this.getData();
  }

  getData(){
    return this.http.get(this.mockedApiUrl)
    .map((res:Response)=>res.json())
  }

  getFlightsDetails(){
    this.getData().subscribe(data=>{console.log(data);
    this.data=data;})
  }
}
