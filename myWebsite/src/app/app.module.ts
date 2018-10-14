import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridsterModule } from 'angular-gridster2';


import { AppComponent } from './app.component';
import { RegistertionComponent } from './registertion/registertion.component';


@NgModule({
  declarations: [
  AppComponent,
  RegistertionComponent ,
  ],
  imports: [
  BrowserModule,
  GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
