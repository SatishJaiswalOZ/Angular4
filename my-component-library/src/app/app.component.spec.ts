import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import our module 
import { HeaderModule } from './modules/header/header.module';
import { SearchInputModule } from './modules/search-input/search-input.module';
import { FlightCardHeaderModule } from './modules/flight-card-header/flight-card-header.module';
import { FlightCardModule } from './modules/flight-card/flight-card.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        HeaderModule,
        SearchInputModule,
        FlightCardHeaderModule,
        FlightCardModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Flight Search Engine'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Flight Search Engine');
  }));

  //Need optimization
  it('should return count 0 from service without queryString', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;

    const  form: any = {
            from: 'goa',
            to: 'delhi'}
   //apimocker should be running
    expect(app.getFlightsDetails().length.toEqual(2));
  }));
});
