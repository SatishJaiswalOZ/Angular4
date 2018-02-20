import { Component, OnInit, ViewChild } from '@angular/core';
import {DatePickerComponent} from 'ng2-date-picker';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('dayPicker') datePicker: DatePickerComponent;

  open() {
      this.datePicker.api.open();
  }

  close() {
       this.datePicker.api.close();
  }
}
