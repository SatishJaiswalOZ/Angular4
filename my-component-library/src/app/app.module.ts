import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

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
    HeaderModule,
    SearchInputModule,
    FlightCardHeaderModule,
    FlightCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
