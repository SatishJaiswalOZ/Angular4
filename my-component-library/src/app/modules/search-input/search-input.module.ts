import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabModule } from 'angular-tabs-component';
import { HttpModule } from '@angular/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { SearchInputComponent } from './search-input.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    TabModule,
    DpDatePickerModule,
    IonRangeSliderModule,
    FormsModule,        
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [SearchInputComponent],
  exports: [
    SearchInputComponent 
  ]
})
export class SearchInputModule { }
