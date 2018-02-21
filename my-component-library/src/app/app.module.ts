import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
// import our module 
import { HeaderModule } from './modules/header/header.module';
import { SearchInputModule } from './modules/search-input/search-input.module';
import { FlightCardHeaderModule } from './modules/flight-card-header/flight-card-header.module';
import { FlightCardModule } from './modules/flight-card/flight-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HeaderModule,
    SearchInputModule,
    FlightCardHeaderModule,
    FlightCardModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
