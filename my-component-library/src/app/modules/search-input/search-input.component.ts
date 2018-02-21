import {ElementRef, Component, OnInit, ViewChild } from '@angular/core';
import {DatePickerComponent} from 'ng2-date-picker';
import {Http,Response} from '@angular/http';
import { SearchService } from './search-input.component.search.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'ion-rangeslider'
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  providers: [SearchService]
})

export class SearchInputComponent implements OnInit {
  private inputElem: any;
  private searchResult = '';
  private mockedApiUrl="http://localhost:7878/first";
  myForm: FormGroup;  

  data:any={};

  //results: Object;
  searchTerm$ = new Subject<string>();
  searchResults = [];

  @ViewChild('dayPicker') datePicker: DatePickerComponent;
  @ViewChild('sliderElement') el:ElementRef;

  constructor(private http:Http,fb: FormBuilder){
  //TO OPTIMIZE THE LATENCY, INSTEAD OF WHOLE DATA, ONLY QUERY DATA SHOULD BE FETCH.
  //BELOW SERVICE DOES THE SAME BUT API REQUIRE SERVICE EXPOSURE WITH QUERYSTRING PARAMETER.
  //constructor(private searchService: SearchService) {
  
  //this.getFlightsDetails();
  //this.getData();

  //this.searchService.search(this.searchTerm$)
  //.subscribe(results => {
  //this.results = results.results;
  //});

  this.myForm = fb.group({  
    'from': ['Enter Origin City', Validators.pattern('^[a-zA-Z \-\']+')]  
  }); 
  }
  ngOnInit() {
    this.inputElem = this.el.nativeElement
    this.initSlider();
  }

  open() {
      this.datePicker.api.open();
  }

  close() {
       this.datePicker.api.close();
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
      //for now just to check.It will be replaced by actual queryString
      if (data[i].from == "Delhi") {
          this.searchResult = data[i];
          this.searchResults.push(this.searchResult);
      }
    }
    console.log(this.searchResults); 
  })
  }

  onSubmit(form: any): void {  
    console.log('you submitted value:', form);  
     this.getFlightsDetails();
     this.getData();
  }

  private initSlider() {
   /* let that = this;
    (<any>jQuery(this.inputElem))({
      onStart: function () {
        console.log('you submitted value1:'); 
    },
    onChange: function (a) {
      console.log('you submitted value2:'); 
    },
    onFinish: function () {
      console.log('you submitted value3:'); 
    },
    onUpdate: function () {
      console.log('you submitted value4:'); 
    }
    });*/
  }
}
