import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import our module 
import { HeaderModule } from './modules/header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule // import it into our @NgModule block
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
