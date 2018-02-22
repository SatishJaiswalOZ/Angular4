import {ElementRef, Component, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import {DatePickerComponent} from 'ng2-date-picker';
import { FormBuilder, FormGroup,Validators  } from '@angular/forms';
import 'ion-rangeslider'

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
  @ViewChild('sliderElement') el:ElementRef;

  constructor(fb: FormBuilder){
  this.myForm = fb.group({  
    'from': ['', Validators.required],
    'to': ['',Validators.required],
    'dateInput':['',Validators.required]
  }); 
  }

  @Output()
  flightSearchInitiated:EventEmitter<any>=new EventEmitter<any>();

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

  onSubmit(form: any): void {  
    console.log('you submitted value:', form);  
    //callback to parent component
     this.flightSearchInitiated.emit(form);
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
