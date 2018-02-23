import {Component, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import {DatePickerComponent} from 'ng2-date-picker';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import {IonRangeSliderComponent} from "ng2-ion-range-slider";

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  providers: []
})

export class SearchInputComponent implements OnInit {
  private inputElem: any;
  myForm: FormGroup;  

  @ViewChild('dayPicker') datePicker: DatePickerComponent;
  @ViewChild('sliderElement') sliderElement: IonRangeSliderComponent;
  private formData:any;

  list: any[] = ['1', '2', '3'];
  edit: any;
  min: number = 0;
  max: number = 10000;
  flightSearchSlider = {
    name: "Flight Search Slider", 
    onUpdate: undefined, 
    onFinish: undefined};

  constructor(private fb: FormBuilder){  }

  @Output()
  flightSearchInitiated:EventEmitter<any>=new EventEmitter<any>();

  ngOnInit() {
    this.myForm = this.fb.group({  
      'from': ['', Validators.required],
      'to': ['',Validators.required],
      'dateInput':['',Validators.required]
    }); 
  }

  open() {
      this.datePicker.api.open();
  }

  close() {
       this.datePicker.api.close();
  }

  onSubmit(form: any): void {  
    this.formData=form;
    console.log('you submitted value:', form);  
    //callback to parent component
     this.flightSearchInitiated.emit({
       from:form.from,
       to:form.to,
       dateInput:form.dateInput,
       filterRequested:false});
  }

  update(fareSlider, event) {
    fareSlider.onUpdate = event;
    console.log("FareSlider updated: From: " + 
    fareSlider.onUpdate.from + " To: "+ fareSlider.onUpdate.to );
  }

  finish(fareSlider, event) {
    fareSlider.onFinish = event;
    console.log("FareSlider finished: From: " + 
    fareSlider.onUpdate.from + " To: "+ fareSlider.onUpdate.to );
    this.flightSearchInitiated.emit({
      from:this.formData.from,
      to:this.formData.to,
      dateInput:this.formData.dateInput,
      fareFrom:fareSlider.onUpdate.from , 
      fareUpTo:fareSlider.onUpdate.to,
      filterRequested:true });
  }
}
