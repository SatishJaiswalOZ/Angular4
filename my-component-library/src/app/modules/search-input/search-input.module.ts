import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input.component';
import { TabModule } from 'angular-tabs-component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { HttpModule } from '@angular/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    TabModule,
    DpDatePickerModule,
    IonRangeSliderModule,
    FormsModule,        
    ReactiveFormsModule
  ],
  declarations: [SearchInputComponent],
  exports: [
    SearchInputComponent 
  ]
})
export class SearchInputModule { }
