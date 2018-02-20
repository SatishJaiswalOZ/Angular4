import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from './search-input.component';
import {TabModule} from 'angular-tabs-component';
import {DpDatePickerModule} from 'ng2-date-picker';
import { IonRangeSliderModule } from "ng2-ion-range-slider";

@NgModule({
  imports: [
    CommonModule,
    TabModule,
    DpDatePickerModule,
    IonRangeSliderModule
  ],
  declarations: [SearchInputComponent],
  exports: [
    SearchInputComponent 
  ]
})
export class SearchInputModule { }
